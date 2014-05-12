(ns lt.plugins.lt-markdown
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-dir (plugins/find-plugin "Markdown"))

(def css-path (files/join plugin-dir "css/github.css"))

(def style-content (:content (files/open-sync css-path)))

(defn wrap-css
  [title html-content]
  (str "<!DOCTYPE html><html>"
       "<head><meta charset='utf-8'>"
       "<title>" title "</title>"
       "<style>" style-content "</style>"
       "</head>"
       "<body>"
       "<div class='lt-markdown'>" html-content "</div>"
       "</body>"
       "</html>"))

(defn setMarkDownHTML! [ed obj]
  (set! (.-innerHTML (object/->content obj))
        (js/marked (.getValue (editor/->cm-ed ed)))))

(defn get-filename [ed]
  (-> @ed :info :name))

(defui markdown-skeleton [this]
  [:div {:class "lt-markdown"}
   [:h1 "This should be replaced with markdown content eventually"]])

(object/object* ::lt-markdown.markdown
                :tags [:lt-markdown.markdown]
                :name "markdown"
                :behaviors [::on-close-destroy]
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Live")))
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
                      (let [markdown-obj (:markdown @this)]
                        (setMarkDownHTML! this markdown-obj))))

(cmd/command {:command ::watch-editor
              :desc "Markdown: Watch this editor for changes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            filename (get-filename ed)
                            markdown-obj (object/create ::lt-markdown.markdown filename)]
                        (tabs/add-or-focus! markdown-obj)
                        (object/update! ed [:markdown] (fn [] markdown-obj))
                        (object/add-behavior! ed ::read-editor)
                        ;; Update the new tab with the markdown
                        (object/raise ed ::read-editor)))})
