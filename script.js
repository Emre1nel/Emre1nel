

























function toggleSettingsMenu() {
  const menu = document.getElementById("settings-menu");
  menu.classList.toggle("show");
}

function translatePage() {
  const language = document.getElementById("language-select").value;
  if (language === "tr") {
    window.location.href = `https://translate.google.com/translate?hl=tr&sl=en&tl=tr&u=${window.location.href}`;
  } else if (language === "en") {
    window.location.href = `https://translate.google.com/translate?hl=en&sl=tr&tl=en&u=${window.location.href}`;
  }
}

function toggleTheme() {
  const isChecked = document.getElementById("theme-toggle").checked;
  if (isChecked) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}









































document.addEventListener("DOMContentLoaded", function() {
  // Popup'ları açmak için butonlara tıklama olayı ekleme
  document.getElementById("contactButton").onclick = function() {
      document.getElementById("contactPopup").style.display = "block";
  };

  document.getElementById("copyrightButton").onclick = function() {
      document.getElementById("copyrightPopup").style.display = "block";
  };

  document.getElementById("privacyPolicyButton").onclick = function() {
      document.getElementById("privacyPolicyPopup").style.display = "block";
  };

  // Popup'ları kapatmak için kapatma butonlarına tıklama olayı ekleme
  var closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach(function(button) {
      button.onclick = function() {
          var popup = document.getElementById(this.getAttribute("data-popup"));
          popup.style.display = "none";
      };
  });

  // Popup dışında bir yere tıklanırsa popup'ı kapatma
  window.onclick = function(event) {
      var popups = document.querySelectorAll(".popup");
      popups.forEach(function(popup) {
          if (event.target === popup) {
              popup.style.display = "none";
          }
      });
  };
});































function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}

svgturkiyeharitasi();











  





















  
  
  
  
