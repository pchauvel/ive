(function($, Drupal, drupalSettings) {
  $(document).ready(function() {
    $('.block h2').click(function() {
      $(this).parent().find('.content').toggle();
    });
  });
})(jQuery, Drupal, drupalSettings);
