jQuery(document).ready(function() {
    $.ajax({
        url: "countryInfo.xml",
        type: "get",
        dataType: "xml",
        async: true,
        success: function(data) {
            $(data).find('Na').each(function(){
                var A = $(this).find('A1').text();
                var B = $(this).find('B1').text().split(/\r?\n|\r/);
                var C = $(this).find('C1').text().split(/\r?\n|\r/);
                var D = $(this).find('D1').text().split(/\r?\n|\r/);
                var E = $(this).find('E1').text().split(/\r?\n|\r/);
                var F = $(this).find('F1').text().split(/\r?\n|\r/);
                var G = $(this).find('G1').text().split(/\r?\n|\r/);

                if(A==="요르단") {
                    if($(this).find('B1').text().length!=0) {
                        for(var i = 0; i < B.length; i++) {
                            $('#T1').append(B[i]);
                            $('#T1').append("<br>");
                        }
                    } else {$('#T1').append("-. 관련 자료 없음");}

                    if($(this).find('C1').text().length!=0) {
                        for(var i = 0; i < C.length; i++) {
                            $('#T2').append(C[i]);
                            $('#T2').append("<br>");
                        }
                    } else {$('#T2').append("-. 관련 자료 없음");}

                    if($(this).find('D1').text().length!=0) {
                        for(var i = 0; i < D.length; i++) {
                            $('#T3').append(D[i]);
                            $('#T3').append("<br>");
                        }
                    } else {$('#T3').append("-. 관련 자료 없음");}

                    if($(this).find('E1').text().length!=0) {
                        for(var i = 0; i < E.length; i++) {
                            $('#T4').append(E[i]);
                            $('#T4').append("<br>");
                        }
                    } else {$('#T4').append("-. 관련 자료 없음");}

                    if($(this).find('F1').text().length!=0) {
                        for(var i = 0; i < F.length; i++) {
                            $('#T5').append(F[i]);
                            $('#T5').append("<br>");
                        }
                    } else {$('#T5').append("-. 관련 자료 없음");}

                    if($(this).find('G1').text().length!=0) {
                        for(var i = 0; i < G.length; i++) {
                            $('#T6').append(G[i]);
                            $('#T6').append("<br>");
                        }
                    } else {$('#T6').append("-. 관련 자료 없음");}
                }
            });
        },
        error: function(error) {
            alert(error);
        }
    });
});