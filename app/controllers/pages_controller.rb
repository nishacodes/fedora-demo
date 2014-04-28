class PagesController < ApplicationController

  def index 
    @sidenav = {
      "Section 1" => [
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Video Demo (with attachments)" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "PDF Demo" }
      ],
      "Section 2" => [
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Text Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "PPT Demo" }
      ],
      "Section 3" => [
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Audio Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Google Doc (Editable)" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Quiz Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Survey Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Google Form Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "YouTube Livestream Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Google Groups Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Flipbook Demo" },
        {"icon-class"=> "fa fa-youtube-play", "name"=> "Articulate Demo" }
      ]
    }
  end
end
