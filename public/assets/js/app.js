$(document).ready(() => {
  const $fweets = $('#fweets');
  $.get('/api/fweets')
    .then(fweets => {
      fweets.forEach(({ fweet }) => {
        const $media = $('<div>').addClass('media');
        const $mediaBody = $('<div>').addClass('media-body').text(fweet);
        const $h5 = $('<h5>').addClass('mt-0').text('Fweet heading');
        $mediaBody.prepend($h5);
        $media.append($mediaBody);
        $fweets.append($media);
      });
    });
});
