(ns lt.plugins.lt-markdown
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn setMarkDownHTML! [ed obj]
  (set! (.-innerHTML (object/->content obj))
        (.makeHtml (:converter @obj)
                   (.getValue (editor/->cm-ed ed)))))

(defui markdown-skeleton [this]
  [:div {:class "lt-markdown"}
   [:h1 "This should be replaced with markdown content eventually"]])

(object/object* ::lt-markdown.markdown
                :tags [:lt-markdown.markdown]
                :name "markdown"
                :behaviors [::on-close-destroy]
                :init (fn [this]
                        (object/update! this [:converter] #(js/Showdown.converter. #js {:extensions #js ["github"]}))
                        (markdown-skeleton this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :desc "Markdown: Read the content inside an editor"
          :reaction (fn [this]
                      (console/log "Reading editor")
                      (let [markdown-obj (:markdown @this)]
                        (setMarkDownHTML! this markdown-obj))))

(cmd/command {:command ::watch-editor
              :desc "Markdown: Watch this editor for changes"
              :exec (fn []
                      (console/log "saving editor")
                      (let [markdown-obj (object/create ::lt-markdown.markdown)
                            ed (pool/last-active)]
                        (tabs/add-or-focus! markdown-obj)
                        (object/update! ed [:markdown] (fn [] markdown-obj))
                        (object/add-behavior! ed ::read-editor)
                        ;; Update the new tab with the markdown
                        (object/raise ed ::read-editor)))})
