// Translates "hello" into a user-specified language using an external API,
// triggered by button click or Enter key press in the language code input

$('document').ready(function () {
	$('INPUT#btn_translate').click(translate);
	$('INPUT#language_code').focus(function () {
		$(this).keydown(function (e) {
			if (e.keyCode === 13) {
				translate();
			}
		});
	});
});

function translate () {
	const url = 'https://www.fourtonfish.com/hellosalut/?';
	$.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
		$('DIV#hello').html(data.hello);
	});
}
