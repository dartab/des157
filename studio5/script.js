// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    <script type="text/javascript" src="lib/soundjs-NEXT.combined.js"></script>

    <script id="editable">
      var preload;

      function init() {
        if (!createjs.Sound.initializeDefaultPlugins()) {
          document.getElementById("error").style.display = "block";
          document.getElementById("content").style.display = "none";
          return;
        }

        //examples.showDistractor("content");
        var assetsPath = "audio/";
        var sounds = [{
            src: "OfficeBoy.mp3",
            id: 1
          },
          {
            src: "OfficeBoy.mp3",
            id: 2
          },
          {
            src: "OfficeBoy.mp3",
            id: 3
          },

          {
            src: "OfficeBoy.mp3",
            id: 4
          },
          {
            src: "OfficeBoy.mp3",
            id: 5
          },
          {
            src: "OfficeBoy.mp3",
            id: 6
          },
        ];

        createjs.Sound.alternateExtensions = ["ogg"];
        createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
        createjs.Sound.registerSounds(sounds, assetsPath);
      }

      function soundLoaded(event) {
        //examples.hideDistractor();
        var div = document.getElementById(event.id);
        div.style.backgroundImage = "url('images/alien.png')";
      }

      function stop() {
        if (preload != null) {
          preload.close();
        }
        createjs.Sound.stop();
      }

      function playSound(target) {
        //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
        var instance = createjs.Sound.play(target.id);
        if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
          return;
        }
        target.className = "gridBox active";
        instance.addEventListener("complete", function(instance) {
          target.className = "gridBox";
        });
      }
    </script>

});
