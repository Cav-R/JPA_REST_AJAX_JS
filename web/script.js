/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    $(window).load(function () {
        $('path').click(function () {
            var code = ($(this).attr('id'));
             $(this).attr('fill', "#c0c0c0");
            console.log(code);
            $.ajax({
                type: "GET",
                url: "https://restcountries.eu/rest/v1/alpha/" + code
            }).done(function (country)
            {
                $("#country").html(country.name);
                $("#population").html(country.population);
                $("#area").html(country.area);
                $("#borders").html(country.borders.join(", "));
            }).fail(function () {
                console.log(("fail"));
            });
        });
    });

