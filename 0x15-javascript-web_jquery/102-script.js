// Translates "hello" into a user-specified language using an external API and displays the result

$('document').ready(function () {
	const url = 'https://www.fourtonfish.com/hellosalut/?';
	$('INPUT#btn_translate').click(function () {
		$.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
			$('DIV#hello').html(data.hello);
		});
	});
});
