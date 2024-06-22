document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_link');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});

  
$(document).ready(function () {
    $('.accordion-header').on('click', function () {
      const $this = $(this);
      const $content = $this.next();
  
      $('.accordion-header').not($this).removeClass('active').next().css('max-height', 0);
  
      $this.toggleClass('active');
      if ($this.hasClass('active')) {
        $content.css('max-height', $content[0].scrollHeight + 'px');
      } else {
        $content.css('max-height', 0);
      }
    });
  });  

  const numberInput = document.getElementById('numberInput');
  
  numberInput.addEventListener('input', function() {
      // Remove non-numeric characters using regex
      this.value = this.value.replace(/[^0-9]/g, '');
  });

  $('.form-submit').click(function(e){
    $('.form-control .error').addClass('active')
  });
