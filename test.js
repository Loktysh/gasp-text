function animateSequence() {
    var a = document.getElementsByClassName('cssanimation');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
      for (l = 0; l < letter.length; l++) {
        if (letter[l] != ' ') {
          if (letter.slice(l, l + 4) == '<br>') {
            l += 4;
            str += '<br>';
          }
          if (letter.slice(l, l + 3) == '<b>') {
            l += 3;
          }
          if (letter.slice(l, l + 4) == '</b>') {
            l += 4;
            str += '</b>';
          }
          else {
            str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
            delay += 150;
           }
      }else
      str += letter[l];    
        }
        $this.innerHTML = str;
    }
}
