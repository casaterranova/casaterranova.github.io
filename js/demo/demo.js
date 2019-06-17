/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'
  let imgs = [
    'imgs/banheiro.jpeg',
    'imgs/cozinha.jpeg'
  ]

  // Load demo images from flickr:
  var carouselLinks = []
  var linksContainer = $('#links')
  var baseUrl
  // Add the demo images as links with thumbnails to the page:
  $.each(imgs, function (index, photo) {
    baseUrl = photo
    $('<a/>')
      .append($('<img>').prop('src', baseUrl))
      .prop('href', baseUrl)
      .prop('title', 'afoto')
      .attr('data-gallery', '')
      .appendTo(linksContainer)
    carouselLinks.push({
      href: baseUrl,
      title: 'afoto'
    })
  })
  // Initialize the Gallery as image carousel:
  blueimp.Gallery(carouselLinks, {
    container: '#blueimp-image-carousel',
    carousel: true
  })
})
