$(function () {
  // page 로드 이후 주소값 가져오기
  var currentHref = splitHref($(location));
  console.log(currentHref);

  // console.log('#header');
  // console.log($('body'));
  // console.log(window.location.href);
  // console.log($(location));
  // $('#header').load('./include/header.html', function () {
  //   // console.log($(this));
  //   // console.log($(this).find('#top-logo a').attr('href'));
  //   // $(this).find('a').attr('href');
  //   var thisElem = $(this); // #header
  //   thisElem.find('a').each(function () {
  //     $(this).attr('href');
  //     // console.log($(this).attr('href'));
  //     /* 실습: index.html이 아닐 때 ./ -> ../ 변경 */
  //   });
  // });

  if (currentHref == 'index' || currentHref == ' ') {
    $('#header').load('./include/header.html');
    $('#footer').load('./include/footer.html');
  } else {
    $('#header').load('../include/header.html');
    $('#footer').load('../include/footer.html');
  }
  
  // if (currentHref == 'index') {
  //   $('#header').load('./include/header.html', function () {
  //     var thisElem = $(this); // #header
  //     hrefChange(thisElem.find('a'), '.');
  //   });
  // } else {
  //   $('#header').load('../include/header.html', function () {
  //     var thisElem = $(this);
  //     hrefChange(thisElem.find('a'), '..');
  //   });
  // }

  // function hrefChange(el, path) {
  //   $(el).each(function () {
  //     var matchHref = $(this).attr('href').split('/');
  //     matchHref[0] = path;
  //     console.log(matchHref[0]);
  //     $(this).attr('href', matchHref.join('/'));
  //   });
  // }


  /* 실습: #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여 해당 메뉴에 'on' class를 추가하시오. */
  function splitHref(el) {
    var href = el.attr('href').split('/');
    href = href[href.length - 1].split('.'); // split을 사용하여 받은 배열 중 마지막 요소를 반환
    href = href[0];
    return href;
  }
  // console.log($(location));
  $('#lnb a').each(function () {
    // console.log($(this).attr('href'));
    // console.log(splitHref($(this)));
    var matchHref = splitHref($(this));
    // console.log(currentHref, matchHref);
    if (currentHref == matchHref) {
      $(this).addClass('on');
    }
  });

  // 아코디언 초기화
  var acElem = $('.accordion');

  acElem.find($('dd:not(:first)').css('display', 'none'));
  acElem.find($('dl dt').click(function () {
    if ($('+dd', this).css('display') == 'none') {
      $('dl dd').slideUp('slow');
      $('+dd', this).slideDown('slow');
    }
  }));
});