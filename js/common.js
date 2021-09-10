$(document).ready(function(){
	resQuick();
    
/*======= 레이어팝업 ======= */

$(document).on('click', '.btnPop', function(){
    layerPop();

    $(this).addClass('on');
    $('html').addClass('popOpen');

    //닫히지 않아야할경우 분기
    if(!$(this).closest('.popwrap').hasClass('noneClose')){
        $(this).closest('.popwrap').fadeOut(300, function(){
            $(this).removeClass('open');
        });
    }
    
    var name = $(this).attr('layer-name');
    $('.popwrap[layer-name=' + name + ']').fadeIn(100, function(){
       // $(this).find('.firstTab').focus();
        $(this).addClass('open');
        layerPop();
    });
    
});

$(document).on('click', '.popClose, .popwrap', function(){
    popClose();
});
/*=======// 레이어팝업 ======= */

});

$(window).resize(function(){
resQuick(); // 반응형 퀵
layerPop(); //레이어팝업
});


$(window).scroll(function(){

});

// 레이어팝업 설정
function layerPop(){
    $('.btnPop, .popwrap').each(function(){
        var tit = $(this).attr('title');
        $(this).attr('layer-name', tit).removeAttr('title');
    });

    $('.popwrap').each(function(){
		var hei = $('.wrapper').outerHeight();		
        var popH = $(this).find('.popup').outerHeight();
        var pdT = (hei - popH) / 2;
        var mgB = $(this).find('.popup').css('margin-bottom');
        var space = mgB.replace(/px/g, '') * 2;

		console.log(hei);
		console.log(popH);
        if(hei - space < popH){
            $(this).css({'padding-top':mgB});
        }else{
            $(this).css({'padding-top':pdT});
        }
    });
}

// 레이어팝업 닫기
function popClose(){
    var spd = '300';
    $('.popwrap').each(function(){
        $(this).removeClass('open').scrollTop(0).fadeOut(spd, function(){
            $('.btnPop.on').focus().removeClass('on');
            
        });
    });
    setTimeout(function(){
        $('html').removeClass('popOpen');
    }, spd);
}
	