class PagesController < ApplicationController

  def index 
    @sidenav = {
      "Section 1" => [
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Video Demo (with attachments)" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "PDF Demo" }
      ],
      "Section 2" => [
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Text Demo" },
        {"icon-class"=> "fa fa-picture-o", "name"=> "PPT Demo" }
      ],
      "Section 3" => [
        {"icon-class"=> "fa fa-volume-up", "name"=> "Audio Demo" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Google Doc (Editable)" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Quiz Demo" },
        {"icon-class"=> "fa fa-table", "name"=> "Survey Demo" },
        {"icon-class"=> "fa fa-table", "name"=> "Google Form Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "YouTube Livestream Demo" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Google Groups Demo" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Flipbook Demo" },
        {"icon-class"=> "fa fa-file-text-o", "name"=> "Articulate Demo" }
      ]
    }
  end
end
