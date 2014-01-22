(ns lt.plugins.lt-markdown
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.plugins :as plugins]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:div {:class "markdown"}
   [:h1 "Hello from lt-markdown"]])

(object/object* ::lt-markdown.hello
                :tags [:lt-markdown.hello]
                :name "lt-markdown"
                :behaviors [::on-close-destroy ::read-editor]
                :init (fn [this]
                        (object/update! this [:converter] #(js/Showdown.converter. #js {:extensions #js ["github"]}))
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::read-editor
          :triggers [:change]
          :desc "Markdown: Read the content inside an editor"
          :reaction (fn [this data]
                  (console.log "editor Changed"))
          )

(def hello (object/create ::lt-markdown.hello))

(cmd/command {:command ::say-hello
              :desc "lt-markdown: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})

(cmd/command {:command ::watch-editor
              :desc "Markdown: Watch this editor for changes"
              :exec (fn []
                      (console/log "saving editor")
                      (object/update! hello [:editor] #(pool/last-active)))})

(cmd/command {:command ::read-editor
              :desc "Markdown: Read the content inside an editor"
              :exec (fn []
                      (console.log "editor Changed")
                      )})

(comment

  (set! (.-innerHTML (object/->content hello))
        (.makeHtml (:converter @hello)
                   (.getValue (editor/->cm-ed (:editor @hello)))))



  plugins/load-js
  (def converter (js/Showdown.converter. #js {:extensions #js ["github"]}))
  asdf


  asdfa
  )
