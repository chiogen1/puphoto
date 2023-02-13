var dataURL = "../json/photowork.json";
// var dataURL = "https://dev.cmrdb.cs.pu.edu.tw/~jone/1111_teach_api/public/api/game";

$(document).ready(function () {
    getImage();
    $("#0").on('click', function () {
        document.getElementById("card-container").innerHTML = "";//清空*
        getImage();
    }),
    
    $("#1").on('click', function () {
        document.getElementById("card-container").innerHTML = "";//清空*
        $.ajax({
            url: dataURL,
            method: 'GET',
            dataType: 'json',
            data: '',
            async: true,
            success: function (data) {

                var dataLength = data.games.length;
                //category
                //category
                for (var i = 0; i < dataLength; i++) {
                    //col

                    if (data.games[i]["category_id"] == data.categories[0]) {
                        var cardCol = $("<div>");
                        cardCol.addClass("col");

                        //card
                        var cardDiv = $("<div>");
                        cardDiv.addClass("card");

                        //card body
                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        //text-center
                        var textCenter = $("<h3>");
                        textCenter.addClass("text-center");
                        textCenter.html("<b>"+data.games[i]['name']+"</b>");


                        //image
                        var linkImg = $("<a>");
                        linkImg.attr("href", data.games[i]['link']);
                        var cardImg = $("<img>");
                        cardImg.attr("src", data.games[i]['img']);
                        cardImg.addClass("card-img-top");

                        //photographer
                        var cardphotographer = $("<p>");
                        cardphotographer.html("<b>拍攝者:</b><br>" + data.games[i]["photographer"]);

                        //category
                        var cardCategory = $("<p>");
                        cardCategory.addClass("category");
                        cardCategory.html("<b>類別</b><br>" + data.games[i]["category_id"]);

                        //出現在畫面上
                        cardBody.append(
                            textCenter,
                            cardphotographer,
                            cardCategory
                        );
                        linkImg.append(
                            cardImg
                        );

                        cardDiv.append(
                            linkImg,
                            cardBody
                        );

                        cardCol.append(
                            cardDiv
                        );

                        $("#card-container").append(cardCol);
                    }
                }
            },
            error: function () {
                alert("request error !");
            },
        });
    });

    $("#2").on('click', function () {
        document.getElementById("card-container").innerHTML = "";//清空*
        $.ajax({
            url: dataURL,
            method: 'GET',
            dataType: 'json',
            data: '',
            async: true,
            success: function (data) {

                var dataLength = data.games.length;
                //category
                //category
                for (var i = 0; i < dataLength; i++) {
                    //col

                    if (data.games[i]["category_id"] == data.categories[1]) {
                        var cardCol = $("<div>");
                        cardCol.addClass("col");

                        //card
                        var cardDiv = $("<div>");
                        cardDiv.addClass("card");

                        //card body
                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        //text-center
                        var textCenter = $("<h3>");
                        textCenter.addClass("text-center");
                        textCenter.html("<b>" + data.games[i]['name'] + "</b>");


                        //image
                        var linkImg = $("<a>");
                        linkImg.attr("href", data.games[i]['link']);
                        var cardImg = $("<img>");
                        cardImg.attr("src", data.games[i]['img']);
                        cardImg.addClass("card-img-top");


                        //photographer
                        var cardphotographer = $("<p>");
                        cardphotographer.html("<b>拍攝者:</b><br>"+ data.games[i]["photographer"]);

                        //category
                        var cardCategory = $("<p>");
                        cardCategory.addClass("category");
                        cardCategory.html("<b>類別</b><br>" + data.games[i]["category_id"]);

                        //出現在畫面上
                        cardBody.append(
                            textCenter,
                            cardphotographer,
                            cardCategory
                        );
                        linkImg.append(
                            cardImg
                        );

                        cardDiv.append(
                            linkImg,
                            cardBody
                        );

                        cardCol.append(
                            cardDiv
                        );

                        $("#card-container").append(cardCol);
                    }
                }
            },
            error: function () {
                alert("request error !");
            },
        });
    });

    $("#3").on('click', function () {
        document.getElementById("card-container").innerHTML = "";//清空*
        $.ajax({
            url: dataURL,
            method: 'GET',
            dataType: 'json',
            data: '',
            async: true,
            success: function (data) {

                var dataLength = data.games.length;
                //category
                //category
                for (var i = 0; i < dataLength; i++) {
                    //col

                    if (data.games[i]["category_id"] == data.categories[2]) {
                        var cardCol = $("<div>");
                        cardCol.addClass("col");

                        //card
                        var cardDiv = $("<div>");
                        cardDiv.addClass("card");

                        //card body
                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        //text-center
                        var textCenter = $("<h3>");
                        textCenter.addClass("text-center");
                        textCenter.html("<b>" + data.games[i]['name'] + "</b>");


                        //image
                        var linkImg = $("<a>");
                        linkImg.attr("href", data.games[i]['link']);
                        var cardImg = $("<img>");
                        cardImg.attr("src", data.games[i]['img']);
                        cardImg.addClass("card-img-top");


                        //photographer
                        var cardphotographer = $("<p>");
                        cardphotographer.html("<b>拍攝者:</b>" +"<br>"+ data.games[i]["photographer"]);

                        //category
                        var cardCategory = $("<p>");
                        cardCategory.addClass("category");
                        cardCategory.html("<b>類別</b><br>" + data.games[i]["category_id"]);

                        //出現在畫面上
                        cardBody.append(
                            textCenter,
                            cardphotographer,
                            cardCategory
                        );
                        linkImg.append(
                            cardImg
                        );

                        cardDiv.append(
                            linkImg,
                            cardBody
                        );

                        cardCol.append(
                            cardDiv
                        );

                        $("#card-container").append(cardCol);
                    }
                }
            },
            error: function () {
                alert("request error !");
            },
        });
    });

    $("#4").on('click', function () {
        document.getElementById("card-container").innerHTML = "";//清空*
        $.ajax({
            url: dataURL,
            method: 'GET',
            dataType: 'json',
            data: '',
            async: true,
            success: function (data) {

                var dataLength = data.games.length;
                //category
                //category
                for (var i = 0; i < dataLength; i++) {
                    //col

                    if (data.games[i]["category_id"] == data.categories[3]) {
                        var cardCol = $("<div>");
                        cardCol.addClass("col");

                        //card
                        var cardDiv = $("<div>");
                        cardDiv.addClass("card");

                        //card body
                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        //text-center
                        var textCenter = $("<h3>");
                        textCenter.addClass("text-center");
                        textCenter.html("<b>" + data.games[i]['name'] + "</b>");


                        //image
                        var linkImg = $("<a>");
                        linkImg.attr("href", data.games[i]['link']);
                        var cardImg = $("<img>");
                        cardImg.attr("src", data.games[i]['img']);
                        cardImg.addClass("card-img-top");


                        //photographer
                        var cardphotographer = $("<p>");
                        cardphotographer.html("<b>拍攝者:</b><br>" + data.games[i]["photographer"]);
                        

                        //category
                        var cardCategory = $("<p>");
                        cardCategory.addClass("category");
                        cardCategory.html("<b>類別</b><br>" + data.games[i]["category_id"]);
                        //出現在畫面上
                        cardBody.append(
                            textCenter,
                            cardphotographer,
                            cardCategory
                        );
                        linkImg.append(
                            cardImg
                        );

                        cardDiv.append(
                            linkImg,
                            cardBody
                        );

                        cardCol.append(
                            cardDiv
                        );
                        $("#card-container").append(cardCol);
                    }
                }
            },
            error: function () {
                alert("request error !");
            },
        });
    });
});

// 刷新頁面，偵錯用
// setInterval(() => {
//     $("#card-container").empty();
//     getImage();
// }, 5000);

function getImage() {
    $.ajax({
        url: dataURL,
        method: 'GET',
        dataType: 'json',
        data: '',
        async: true,
        success: function (data) {

            var dataLength = data.games.length;

            for (var i = 0; i < dataLength; i++) {
                //col
                var cardCol = $("<div>");
                cardCol.addClass("col");

                //card
                var cardDiv = $("<div>");
                cardDiv.addClass("card");

                //card body
                var cardBody = $("<div>");
                cardBody.addClass("card-body");

                //text-center
                var textCenter = $("<h3>");
                textCenter.addClass("text-center");
                textCenter.html("<b>" + data.games[i]['name'] + "</b>");

                //image
                var linkImg = $("<a>");
                linkImg.attr("href", data.games[i]['link']);
                var cardImg = $("<img>");
                cardImg.attr("src", data.games[i]['img']);
                cardImg.addClass("card-img-top");

                //photographer
                var cardphotographer = $("<p>");
                cardphotographer.html("<b>拍攝者:</b><br>" + data.games[i]["photographer"]);

                //category
                var cardCategory = $("<p>");
                cardCategory.addClass("category");
                cardCategory.html("<b>類別:</b><br>" + data.games[i]["category_id"]);

                //出現在畫面上
                cardBody.append(
                    textCenter,
                    cardphotographer,
                    cardCategory
                );
                linkImg.append(
                    cardImg
                );

                cardDiv.append(
                    linkImg,
                    cardBody
                );

                cardCol.append(
                    cardDiv
                );

                $("#card-container").append(cardCol);

            }
        },
        error: function () {
            alert("request error !");
        },
    });
}

