; (function ($) {

  $.fn.table = function (data) {

    // 拿到th
    let $ths = $(this).find('thead th')
    // 拿到tbody
    let $tbody = $(this).find('tbody')

    if ($tbody.length == 0) {

      $tbody = $('<tbody></tbody>')
      $tbody.appendTo(this)
    }

    for (let i = 0; i < data.length; i++) {

      let $tr = $('<tr></tr>')
      for (let j = 0; j < $ths.length; j++) {

        let prop = $ths.eq(j).data().column
        $tr.append($('<td></td>').text(data[i][prop]))
      }
      $tr.appendTo($tbody)
    }
  }
})(jQuery)