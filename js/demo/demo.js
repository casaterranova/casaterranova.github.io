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

let imgsall = [
  'banheiro.jpeg',
  'banheiro2.jpeg',
  'cozinha.jpeg',
  'cozinha2.jpeg',
  'cozinha3.jpeg',
  'fachada.jpeg',
  'fachada2.jpeg',
  'frente.jpeg',
  'frente2.jpeg',
  'fundo.jpeg',
  'fundo2.jpeg',
  'fundo3.jpeg',
  'lavanderia.jpeg',
  'quarto.jpeg',
  'quarto2.jpeg',
  'sala.jpeg',
  'sala2.jpeg',
  'sala3.jpeg',
  'sala4.jpeg',
  'sala5.jpeg'
]

let imgs_best = [
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
