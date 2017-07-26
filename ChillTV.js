/*
Copyright © 2016 Benjamin Paul. All rights reserved.
*/

MOVIELOADED = false;
$.ajax({
    url: "https://rawgit.com/Lisztinator/ChillTV/master/Movie.js",
    dataType: "script",
    success: function () {
	    if (MOVLIST) {
		    appendMovieList();
	    }
	    MOVIELOADED = true;
    }
});

TVLOADED = false;
$.ajax({
    url: "https://rawgit.com/Lisztinator/ChillTV/master/TV.js",
    dataType: "script",
    success: function () {
	    if (TVLIST) {
		    appendTVList();
	    }
	    TVLOADED = true;
    }
});

var modpermtext0 = '', modpermtext1 = '', modpermtext2 = '', modpermtext3 = '', modpermtext4 = '', oplaylistperm = '';
for (m = 0; m < 5; m++) {
	if (m === 0) {
		rankpick = 'Admin';
	}
	if (m === 1) {
		rankpick = 'Moderator';
	}
	if (m === 2) {
		rankpick = 'Leader';
	}
	if (m === 3) {
		rankpick = 'Guest';
	}
	if (m === 4) {
		rankpick = 'Anonymous';
	}
	$("#cs-permedit").find("option[selected='selected']:Contains("+rankpick+")").parent().parent().prev().each(function() {
	$(this).parent().prevUntil('h3').andSelf().prev('h3').text() === 'Open playlist permissions' ? oplaylistperm = ' (playlist unlocked)' : oplaylistperm = '';
	if (m === 0) {
		modpermtext0 += $(this).text() + oplaylistperm + ', ';
	}
	if (m === 1) {
		modpermtext1 += $(this).text() + oplaylistperm + ', ';
	}
	if (m === 2) {
		modpermtext2 += $(this).text() + oplaylistperm + ', ';
	}
	if (m === 3) {
		modpermtext3 += $(this).text() + oplaylistperm + ', ';
	}
	if (m === 4) {
		modpermtext4 += $(this).text() + oplaylistperm + ', ';
	}
	});
}

MOTDTabs_Array = [
	['Updates', '<ul><b>7/8/17</b><li>Multiple improvements on search functionality in the movie and tv lists.</li></ul>'],
	['Rules', '<ul><li>No discriminatory language or comments.</li><li>No pictures/vids of pornography or gore.</li><li>No spamming of the chat or playlist.</li><li>"/sp" must be used for spoilers.</li><li>Voteskip is at a 50% ratio. If you\'re afk, you aren\'t counted in voteskips. Use "/afk" to toggle afk.</li></ul>'],
	['Permissions', '<b>Rank Order: </b><span style="color:#f90;font-weight:700">Admin</span><b>-></b><span style="color:#0a0;font-weight:700">Moderator</span><b>-></b><span style="color:#FFD700;font-weight:700">Leader</span><b>-></b><span style="color:#604DBF;font-weight:700">Registered</span><b>-></b><span style="color:gray;font-weight:700">Guest</span><b>-></b><span style="color:white;font-weight:700">Anonymous</span><br /><br /><b style="color:#f90">Admin - </b>'+modpermtext0.slice(0, -2)+'<br /><br /><b style="color:#0a0">Moderator or higher - </b>'+modpermtext1.slice(0, -2)+'<br /><br /><b style="color:#FFD700">Leader or higher - </b>'+modpermtext2.slice(0, -2)+'<br /><br /><b style="color:gray">Guest or higher - </b>'+modpermtext3.slice(0, -2)+'<br /><br /><b style="color:white">Anonymous or higher - </b>'+modpermtext4.slice(0, -2)],	
	['Links', '<ul><li><a target="_blank" href="https://github.com/calzoneman/sync/wiki/Beginner%27s-Guide-and-FAQ">Cytube FAQ</a></li><li><a target="_blank" href="https://webchat.6irc.net/?channels=chat,cytube">Cytube Support</a></li><li><a target="_blank" href="https://github.com/calzoneman/sync/wiki/Google-Drive-Userscript-Installation-Guide">Google Drive Userscript Installation Guide and Troubleshooting</a></li></ul>'],
	['Donate', /*<center><b>Welcome to ChillTV:</b>  Have some chill. Please feel free to add to the playlist, voteskip, participate in polls, chat, etc. There are thousands of movies and TV shows in the video database! Feel free to nominate anything you want.</center><br />*/'<center><br /><span>Donations help pay for Google Drive storage, OMDb API access, VPN access, and cloudconvert.com.</span><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHLwYJKoZIhvcNAQcEoIIHIDCCBxwCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYApyizDpzUAwa6dn8iFZCZFYFvLU57a4aMQd8Fqn129xq/G8K+wK0rAMFe+qxbRygnqQYoEw9GAa+yFL3j8geF2Rd6HiOD0YgByDf1PAAIXCM4vCUmMkxhjxMLHIu4Fpslgg1x4HhVActoqDWnsqJZIb3zUACY92XkR2ZrISCuzYzELMAkGBSsOAwIaBQAwgawGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIghz97jNU6TqAgYgWvwQl3BZ0FBpygSE9h7BxPwKUGeedvhU+4aigDFyGniKwmDgqGarHh2yCKDVO6DFSr3F/tUhefbQVsyOZ7fbcT1+iQxWfjTRJ4REsJiEMxqKWE2HlnvJm6Y/9ofs9cwv4e1pmg8wurh8zFpYKzDbg4zUJDEfiOn85mNggjrS5A7k85djEm91CoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcwNjExMjM0NTIwWjAjBgkqhkiG9w0BCQQxFgQU01mX14LIwMXDz8y5PKN0X4xLYY8wDQYJKoZIhvcNAQEBBQAEgYB8w+gDVrtz76XzYF5xW1jnoGBpXAs0O2Xi9bYyU3Km79543HLWKDXHRKMRf7zZIZLl4DipZ1/bBCoIzg+gMfRPfeC/cWJSxVwPwW6GTIYYUmxymBCN7voHrFxqZQgO4waIiF+DdID/t7zgfHhGAgfyU5ghduCtLZYcqzlrfnETrw==-----END PKCS7-----"><input width="20%" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></center>'],
];

AskAnswers_Array = [
	'fa sho', 'definitely yes', 'yes', 'ask again later', 'stop asking', 'probably', 'definitely maybe', 'not a chance fancypants', 'definitely no', 'srory Im diselxyc',
	'not likely', 'no', '50/50 chance', 'fuck off', 'I refuse to answer', 'yo mama', 'ass n\' titties', 'yup', 'mhm', 'yeah...no', 'what do you think genius',
	'how about nooooo...', 'yeah no', 'yupperoonies', 'yeppers', 'nah', 'Yes, in due time.', 'My sources say no.', 'Definitely not.', 'Yes.', 'You will have to wait.',
	'I have my doubts.', 'Outlook so so.', 'Looks good to me!', 'Who knows?', 'Looking good!', 'Probably.', 'Are you kidding?', 'Go for it!', 'Don\'t bet on it.',
	'Forget about it.',
];

SoundFilters_Array = {
	':laugh:': 'https://dl.dropboxusercontent.com/s/9aqa1buu3phvpss/laugh.ogg',
	':assandtitties:': 'https://dl.dropboxusercontent.com/s/7l35syfayj0nz0w/Three_6_Mafia_-_Ass_Titties%20%281%29.wav?dl=0',
	':calmdown:': 'https://dl.dropboxusercontent.com/s/v27nekjo0fdxoxe/What_Really_Happened_To_Abe_Lincoln_uncensored_.wav?dl=0',
	':gawddangitbobbeh:': 'https://dl.dropboxusercontent.com/s/g6cc0jljw5vgpro/gawd_dang_it_bobbeh%20%289%29.wav?dl=0',
	':imoldgregg:': 'https://dl.dropboxusercontent.com/s/dqomaa316gibwjz/Old_Gregg_Quotes.wav?dl=0',
	':poop:': 'http://www.soundjay.com/human/sounds/fart-01.mp3',
	':burp:': 'https://www.freesound.org/data/previews/101/101182_1163762-lq.mp3',
	':mow:': 'https://www.freesound.org/data/previews/60/60960_718003-lq.mp3',
	':moo:': 'https://www.freesound.org/data/previews/243/243343_2073169-lq.mp3',
};

ModPanel_Array = [
	['', '<span>COMMANDS:</span><br /><br /><ul><li><code>/m</code> - add rank color to your username</li><li><code>/clear</code> - clear chat for everyone</li><li><code>/d</code> - take a drink (people with leader can use this too, add a positive or negative number to add/subtract total drinks, e.g. <i>/d, /d4, /d-7</i>)</li><li><code>!next</code> - force skip to next video</li><li><code>!bump</code> - bump last item on playlist to next</li><li><code>!delete</code> - delete last item on playslist</li><li><code>!ytnext</code> - add the first result youtube video from your search term next on the playlist (e.g. <i>!ytnext fail compilation</i>)</li><li><code>!award</code> - award someone cash in case the bot didn\'t pick up on a misspelled or incomplete answer. DO NOT award cash for any other reason. DO NOT subtract cash for any reason but to fix a mistake you made when awarding it in the first place. (e.g. <i>!award 400 to ChillTVBot</i>)</li><li><code>!resettrivia</code> - If trivia stopped working, use this command to reset it. DO NOT use this to cheat and sift through questions you are able to win</li><li><code>!resetvideoadder</code> - the bot checks the playlist every 30 seconds and will add up to 3 videos if polling is off. If this seems broken, use this command to reset it</li><li><code>!refresh</code> - refresh the bot entirely</li><li><code>!title</code> - This changes the title that shows on the CyTube homepage as well as the tab of the channel. An argument of \'0\' erases the title. (e.g. <i>!title Marvel Marathon!</i> OR <i>!title 0</i>)</li><li><code>!poll</code> - turn polling on or off.</li></ul>'],
	['', '<span>HOW TO:</span><br /><br /><ul><li> Click on a user\'s name to give/remove leader, kick, mute, shadowmute (user does not know they are muted).</li><br /><li>Registered users or guests that are granted leader will have control over the playlist, polls and drink calls. The moderator needs to make sure the playlist is open for the leader to manipulate the playlist. This is useful for when people want to use the channel while there aren\'t any mods or admins available. See the \'Permissions\' tab to better understand.</li><br /><li>To add or edit chat emotes, go to channel settings->edit->emotes. Paste a image url that ends in .jpg, .png, or .gif. Give the image a name between two colons (:text:) or an emoticon shortcut. Make sure the emote name isn\'t already in use or you will overwrite the existing emote.</li><br /><li>To temporarily insert to the playlist any website instead of media files, click "Embed a custom frame" button in the playlist controls section. Then paste example code to the text area: <i>&lt;iframe src="URL_of_your_page"&gt;&lt;/iframe&gt;</i>, and add.</li></ul>'],
	['', '<span>CONTACT:</span><br /><br /><ul><li>Benny91: Skype- bdpizzle21, Email- bdpaul91@gmail.com</li></ul>'],
];

CustomCaptions_Array = {
	'add': 'Add Video',
	'refresh': 'Refresh Player',
	'voteskip': 'Voteskip Video',
	'welcome': 'Hello',
	'emotelist': '<span class="glyphicon glyphicon-picture" />',
};

EmbeddingMedia_Images = 'a[href$=".jpg"], a[href$=".jpg:large"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".tiff"], a[href$=".gif"]';

EmbeddingMedia_Videos = 'a[href$=".webm"]';

FontsArray = [
	['white', 'wh', '■'],
	['#7F7F7F', 'gre', '■'],
	['#FFFF7F', 'lye', '■'],
	['#FFFF00', 'ye', '■'],
	['#7f7f00', 'dye', '■'],
	['#ffbf7f', 'lor', '■'],
	['#FF7F00', 'or', '■'],
	['#7f3f00', 'dor', '■'],
	['#ff7f7f', 'lre', '■'],
	['#FF0000', 're', '■'],
	['#7f0000', 'dre', '■'],
	['#ff7fbf', 'lro', '■'],
	['#FF007F', 'ro', '■'],
	['#7F003F', 'dro', '■'],
	['#ff7fff', 'lma', '■'],
	['#FF00FF', 'ma', '■'],
	['#7f007f', 'dma', '■'],
	['#bf7fff', 'lvi', '■'],
	['#7F00FF', 'vi', '■'],
	['#3f007f', 'dvi', '■'],
	['#7f7fff', 'lbl', '■'],
	['#0000FF', 'bl', '■'],
	['#00007f', 'dbl', '■'],
	['#7fbfff', 'laz', '■'],
	['#007FFF', 'az', '■'],
	['#003f7f', 'daz', '■'],
	['#7fffff', 'lcy', '■'],
	['#00FFFF', 'cy', '■'],
	['#007f7f', 'dcy', '■'],
	['#7FFFBF', 'lsp', '■'],
	['#00FF7F', 'sp', '■'],
	['#007f3f', 'dsp', '■'],
	['#7fff7f', 'lgr', '■'],
	['#00FF00', 'gr', '■'],
	['#007f00', 'dgr', '■'],
	['#bfff7f', 'lch', '■'],
	['#7FFF00', 'ch', '■'],
	['#3f7f00', 'dch', '■'],
];

defplayer = "right";
defuserlist = "left";
defqueue = "right";

var DEFTHEME = "/css/themes/cyborg.css";

var USERCONFIG = {
	"player": getOrDefault(CHANNEL.name + "_player", defplayer),
	"userlist": getOrDefault(CHANNEL.name + "_userlist", defuserlist),
	"queue": getOrDefault(CHANNEL.name + "_queue", defqueue),
	"qsize": getOrDefault(CHANNEL.name + "_qsize", "wide"),
	"main": getOrDefault(CHANNEL.name + "_main", "top"),
	"motd": getOrDefault(CHANNEL.name + "_motd", "top"),
	"logo": getOrDefault(CHANNEL.name + "_logo", "no"),
	"logourl": getOrDefault(CHANNEL.name + "_logourl", ""),
	"logoht": getOrDefault(CHANNEL.name + "_logoht", 250),
	"header": getOrDefault(CHANNEL.name + "_header", "mouseover"),
	"css": getOrDefault(CHANNEL.name + "_css", "no"),
	"csscode": getOrDefault(CHANNEL.name + "_csscode", ""),
	"modhash": getOrDefault(CHANNEL.name + "_modhash", ""),
	"updatehash": getOrDefault(CHANNEL.name + "_updatehash", ""),
}

var USEROPTS = {
	"theme": getOrDefault(CHANNEL.name + "_theme", "/css/themes/cyborg.css"),
	"layout": getOrDefault(CHANNEL.name + "layout", "fluid"),
	"synch": getOrDefault(CHANNEL.name + "synch", !0),
	"hidevid": getOrDefault(CHANNEL.name + "hidevid", !1),
	"show_timestamps": getOrDefault(CHANNEL.name + "show_timestamps", !0),
	"modhat": getOrDefault(CHANNEL.name + "modhat", !1),
	"blink_title": getOrDefault(CHANNEL.name + "blink_title", "onlyping"),
	"sync_accuracy": getOrDefault(CHANNEL.name + "sync_accuracy", 2),
	"wmode_transparent": getOrDefault(CHANNEL.name + "wmode_transparent", !0),
	"chatbtn": getOrDefault(CHANNEL.name + "chatbtn", !1),
	"altsocket": getOrDefault(CHANNEL.name + "altsocket", !1),
	"joinmessage": getOrDefault(CHANNEL.name + "joinmessage", !0),
	"qbtn_hide": getOrDefault(CHANNEL.name + "qbtn_hide", !0),
	"qbtn_idontlikechange": getOrDefault(CHANNEL.name + "qbtn_idontlikechange", !0),
	"first_visit": getOrDefault(CHANNEL.name + "first_visit", !1),
	"ignore_channelcss": getOrDefault("ignore_channelcss", !1),
	"ignore_channeljs": getOrDefault("ignore_channeljs", !1),
	"sort_rank": getOrDefault(CHANNEL.name + "sort_rank", !0),
	"sort_afk": getOrDefault(CHANNEL.name + "sort_afk", !0),
	"default_quality": getOrDefault("default_quality", "auto"),
	"boop": getOrDefault(CHANNEL.name + "boop", "onlyping"),
	"secure_connection": getOrDefault(CHANNEL.name + "secure_connection", !1),
	"show_shadowchat": getOrDefault(CHANNEL.name + "show_shadowchat", !0),
	"emotelist_sort": getOrDefault(CHANNEL.name + "emotelist_sort", !0),
	"no_emotes": getOrDefault(CHANNEL.name + "no_emotes", !1),
	"strip_image": getOrDefault(CHANNEL.name + "strip_image", !1),
	"us-chat-tab-method": getOrDefault(CHANNEL.name + "us-chat-tab-method",  "Cycle options")
}

$("#plonotification").length > 0 ? $("#plonotification").remove() : '';
rebuildPlaylist();
$("#us-default-quality").detach().appendTo("#videowrap").addClass('pull-right').val(USEROPTS.default_quality).on("change", function() {
	USEROPTS.default_quality = $("#us-default-quality").val();
	setOpt("default_quality", $(this).val());
	refreshPlayer();
});
$("#us-playback > form > div:nth-child(9)").remove();

function storeOpts() {
	for (var e in USEROPTS) {
		if (e !== 'ignore_channelcss' && e !== 'ignore_channeljs' && e !== 'default_quality') {
			setOpt(CHANNEL.name + e, USEROPTS[e]);
		} else {
			setOpt(e, USEROPTS[e]);
		}
	}
}

var SAVETEXTARRAY = [];
var AVATARARRAY = [];
var POINTSARRAY = [['Benny91', 0]];
var SAVEVOLUME = getOrDefault(CHANNEL.name + "_savevolume", 100);
var POINTSARRAY = getOrDefault(CHANNEL.name + "_pointsarray", POINTSARRAY);
var AVATARARRAY = getOrDefault(CHANNEL.name + "_avatararray", AVATARARRAY);
var USERTHEME = getOrDefault(CHANNEL.name + "_theme", DEFTHEME);
var FLUID = getOrDefault(CHANNEL.name + "_fluid", true);
var LAYOUTBOX = getOrDefault(CHANNEL.name + "_layoutbox", false);
var SOUNDSLVL = getOrDefault(CHANNEL.name + "_soundslvl", 2);
var TYPEFONT = getOrDefault(CHANNEL.name + "_typefont", '');
var HIGHFONT = getOrDefault(CHANNEL.name + "_highfont", '');
var TYPEFAMILY = getOrDefault(CHANNEL.name + "_typefamily", '');
var HIGHFAMILY = getOrDefault(CHANNEL.name + "_highfamily", '');
var TYPEITALIC = getOrDefault(CHANNEL.name + "_typeitalic", '');
var TYPEBOLD = getOrDefault(CHANNEL.name + "_typebold", '');
var TYPEUNDER = getOrDefault(CHANNEL.name + "_typeunder", '');
var CHAVATAR = getOrDefault(CHANNEL.name + "_chavatar", '');
var SECRETKEY = getOrDefault(CHANNEL.name + "_secretkey", '');
var EMBEDIMG = getOrDefault(CHANNEL.name + "_embedimg", true);
var EMBEDVID = getOrDefault(CHANNEL.name + "_embedvid", true);
var AVATAR = getOrDefault(CHANNEL.name + "_avatar", false);
var MAINMENU = getOrDefault(CHANNEL.name + "_mainmenu", true);
var ANNOUNCEMENTS = getOrDefault(CHANNEL.name + "_announcements", true);
var POLLAREA = getOrDefault(CHANNEL.name + "_pollarea", true);
var PLAYLIST = getOrDefault(CHANNEL.name + "_playlist", true);
var SEARCHBUTTONS = getOrDefault(CHANNEL.name + "_searchbuttons", true);
var LISTBUTTONS = getOrDefault(CHANNEL.name + "_listbuttons", true);
var MUTESOUND = getOrDefault(CHANNEL.name + "_mutesound", true);
var USERSOUND = getOrDefault(CHANNEL.name + "_usersound", true);
var FULLSCREEN = getOrDefault(CHANNEL.name + "_fullscreen", true);
var DEFDESCR = getOrDefault(CHANNEL.name + "_defdescr", true);
var HIDEPLAYER = getOrDefault(CHANNEL.name + "_hideplayer", true);
//var YUP = getOrDefault(CHANNEL.name + "_yup", true);
var MUTED = getOrDefault(CHANNEL.name + "_muted", false);
var RANDOMNESS = getOrDefault(CHANNEL.name + "_randomness", true);
var TRIVIANESS = getOrDefault(CHANNEL.name + "_trivianess", true);
var TRIVIT = getOrDefault(CHANNEL.name + "_trivit", true);
var MOTDYES = getOrDefault(CHANNEL.name + "_motdyes", true);

var REMOVEVID = false;
var NOPLAYER = false;
var COMMAND = false;
var VOICES = true;
var NEWS = false;
var SOUNDSPANEL = false;
var FONTPANEL = false;
var CHAVE = false;
var CHATAVE = false;
var PINNED = false;
var FULLPL = false;
var LAYOUT = false;

var BGCHANGE = 0;
var MUTEDVOICES = new Array([]);
var HASH = '';
var UPHASH = '';

WEBKIT = "webkitRequestAnimationFrame" in window;
SOUNDSVALUES = new Array(0, 0.2, 0.4, 0.6, 0.8, 1);
IMBA = new Audio("https://dl.dropboxusercontent.com/s/xdnpynq643ziq9o/inba.ogg");

function toggleDiv(div) {
	$(div).css('display') == "none" ? $(div).show() : $(div).hide();
}

var FORINFO = true;
function refreshPlayer() {
	PLAYER.mediaType = "",
	PLAYER.mediaId = "",
	socket.emit("playerReady");
}

function getText(html) {
	div = document.createElement("div");
	div.innerHTML = html;
	return div.textContent || div.innerText;
}

configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />');
configwell = $('<div id="config-well" class="well form-horizontal" />').appendTo(configwrap);

configform = $('<div id="configform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Global layout</div>').appendTo(configform);
configbtnwrap = $('<div id="configbtnwrap" class="col-lg-7 col-md-7" />').appendTo(configform);

configbtn = $('<button id="config-btn" class="btn btn-default">Click to configure</button>')
	.appendTo(configbtnwrap)
	.on("click", function() {
		showConfig();
	});

configbtnwrap.append('<br />');

fluidlayout = $('<label class="checkbox-inline" />').appendTo(configbtnwrap);
cbox = $('<input type="checkbox" id="fluid-layout" value="yes" />')
	.appendTo(fluidlayout)
	.on("click", function() {
		toggleFluidLayout();
	});
cbox.after(' Fluid');

modeform = $('<div id="modeform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Display mode</div>').appendTo(modeform);
modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />').appendTo(modeform);

modesel = $('<select id="mode-sel" class="form-control" />')
	.append('<option value="syMode">default mode</option>')
	.append('<option value="chMode">chatroom mode</option>')
	.append('<option value="kMode">cinema mode</option>')
	.append('<option value="rMode">music mode</option>')
	.appendTo(modewrap)
	.on("change", function() {
		$("#config-btn").prop('disabled', true);
		$("#sounds-dropdown, #fontspanel").remove();
		SOUNDSPANEL = false;
		FONTPANEL = false;
		PLAYER.type == "jw" ? refreshPlayer() : '';
		setMode($(this).val());
		scrollQueue();
		scrollChat();
	});

themeform = $('<div id="themeform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Personal theme</div>').appendTo(themeform);
themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />').appendTo(themeform);

themesel = $('<select id="theme-sel" class="form-control" />')
	.append('<option value="" class="theme-header" disabled>default themes</option>')
	.append('<option value="/css/themes/light.css"># Light</option>')
	.append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
	.append('<option value="/css/themes/slate.css"># Slate</option>')
	.append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
	.append('<option value="/css/themes/modern.css"># Modern</option>')
	.appendTo(themewrap)
	.on("change", function() {
		$("#sounds-dropdown, #fontspanel").remove();
		$("#playlistmanagerwrap").show();
		SOUNDSPANEL = false;
		FONTPANEL = false;
		USERTHEME = $(this).val();
		setUserCSS();
		setOpt(CHANNEL.name + "_theme", USERTHEME);
	});

themesel.val(USERTHEME);

querycontrols = $('<div id="querycontrols" class="btn-group" style="margin-bottom:10px" />').prependTo("#leftpane");
$('<div id="underplaylist" class="btn-group pull-right" style="margin-bottom:10px" />').prependTo("#leftpane");

hideform = $('<div id="hideform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5 conf-cap">Hide</div>').appendTo(hideform);
hidewrap = $('<div id="hidewrap" class="col-lg-7 col-md-7" />').appendTo(hideform);

hidemotd = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-motd" value="no" >')
	.appendTo(hidemotd)
	.on("click", function() {
		toggleDiv("#motdrow");
		MAINMENU = !MAINMENU;
		setOpt(CHANNEL.name + "_mainmenu", MAINMENU);
	});
cbox.after(' Info');
!MAINMENU ? $("#motdrow").hide() && cbox.prop('checked', 'true') : '';

hideann = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-ann" value="no" />')
	.appendTo(hideann)
	.on("click", function() {
		toggleDiv("#announcements");
		ANNOUNCEMENTS = !ANNOUNCEMENTS;
		setOpt(CHANNEL.name + "_announcements", ANNOUNCEMENTS);
	});
cbox.after(' Announcements');
!ANNOUNCEMENTS ? $("#announcements").hide() && cbox.prop('checked', 'true') : '';

hidepoll = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-poll" value="no" />')
	.appendTo(hidepoll)
	.on("click", function() {
		toggleDiv("#pollwrap");
		POLLAREA = !POLLAREA;
		setOpt(CHANNEL.name + "_pollarea", POLLAREA);
	});
cbox.after(' Poll Area');
!POLLAREA ? $("#pollwrap").hide() && cbox.prop('checked', 'true') : '';

hidepl = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-pl" value="no" />')
	.appendTo(hidepl)
	.on("click", function() {
		toggleDiv("#queue");
		toggleDiv("#plmeta");
		PLAYLIST = !PLAYLIST;
		setOpt(CHANNEL.name + "_playlist", PLAYLIST);
	});
cbox.after(' Playlist');
!PLAYLIST ? $("#queue, #plmeta").hide() && cbox.prop('checked', 'true') : ''; // on something loading

hidesearches = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-searches" value="no" />')
	.appendTo(hidesearches)
	.on("click", function() {
		toggleDiv(querycontrols);
		SEARCHBUTTONS = !SEARCHBUTTONS;
		setOpt(CHANNEL.name + "_searchbuttons", SEARCHBUTTONS);
	});
cbox.after(' Search Buttons');
!SEARCHBUTTONS ? querycontrols.hide() && cbox.prop('checked', 'true') : '';

listbuttons = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-lists" value="no" />')
	.appendTo(listbuttons)
	.on("click", function() {
		toggleDiv($("#underplaylist"));
		LISTBUTTONS = !LISTBUTTONS;
		setOpt(CHANNEL.name + "_listbuttons", LISTBUTTONS);
	});
cbox.after(' List Buttons');
!LISTBUTTONS ? $("#underplaylist").hide() && cbox.prop('checked', 'true') : '';

removeform = $('<div id="removeform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5 conf-cap"></div>').appendTo(removeform);
removewrap = $('<div id="removewrap" class="col-lg-7 col-md-7" />').appendTo(removeform);

thevideo = $('<label class="checkbox-inline" />').appendTo(removeform);
cbox = $('<button class="btn btn-default btn-sm" id="removevid">Remove Video</button>')
	.appendTo(thevideo)
	.on("click", function() {
		clearInterval(FIXHEIGHT);
		$("#videowrap").remove();
		$("#chatwrap").removeClass($("#chatwrap").attr('class')).addClass('col-lg-12 col-md-12');
		fitChat(600);
		makeAlert('Refresh Page to Reinsert Video or to Change to Other Layouts').appendTo("#announcements");
		$("#pinup-btn, #config-btn, #mode-sel, #fluid-layout").prop('disabled', true);
		$(this).removeClass('btn-default').addClass('btn-danger');
	});

function createModal(title) {
	outer = $('<div id="modalfade" class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog modal-dialog-nonfluid" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h5 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		outer.hide();
		if (modesel.val() === "syMode") {
			setTimeout(function() {
				$("#videowrap").length > 0 ? fitChat("normal") : '';
				scrollChat();
			}, 100);
		}
	});
	outer.modal();
}

function createTemp(title) {
	outer = $('<div class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog modal-dialog-nonfluid" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h5 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		scrollChat();
	});
	outer.modal();
}

function playerLocation(a) {
	$("#pinup-btn").show();
	if (a == "left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a == "right") {
		$("#videowrap").before($("#chatwrap").detach());
		fitPlayer();
		normalChat();
	} else if (a == "center") {
		$("#videowrap").after($("#chatwrap").detach());
		$("#videowrap, #chatwrap, #chatavewrap").removeClass().addClass("col-lg-8 col-lg-offset-2 col-md-12");
		fitPlayer();
		fitChat();
		$("#pinup-btn").hide();
	}
}

function userlistLocation(a) {
	a == "left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	$("#pinup-btn").show();
	if (a == "right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a == "left") {
		$("#rightpane").after($("#leftpane").detach());
	} else if (a == "center") {
		$("#rightpane").after($("#leftpane").detach())
			.removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#leftpane").removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#pinup-btn").hide();
	}
	b = (a == "right") ? "left" : "right";
	$("#playlistrow").css('background-position', b + ' bottom');
}

function queueSize(a) {
	if (USERCONFIG.queue != "center") {
		if (a == "wide") {
			$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
			$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
		} else if (a == "narrow") {
			$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
			$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
		}
	}
}

function mainLocation(a) {
	if (a == "top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a == "bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a == "top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a == "bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a == "fixed") {
		$(".navbar-fixed-top").css({
			'position': 'fixed',
			'top': '0px',
			'display': 'block',
			'margin-bottom': '0'
		});
		$("#mainpage").css('margin-top', '0');
	} else if (a == "detached") {
		$(".navbar-fixed-top").css({
			'position': 'inherit',
			'display': 'block',
			'margin-bottom': '0'
		});
		$("#mainpage").css('margin-top', '-72px');
	} else if (a == "mouseover") {
		$(".navbar-fixed-top").css({
				'position': 'fixed',
				'top': '-40px',
				'display': 'block',
				'margin-bottom': '0'
			})
			.on("mouseover", function() {
				$(".navbar-fixed-top").css('top', '0px');
			})
			.on("mouseout", function() {
				$(".navbar-fixed-top").css('top', '-40px');
			});
		$("#mainpage").css('margin-top', '-40px');
	} else if (a == "none") {
		$("nav.navbar.navbar-inverse.navbar-fixed-top").css({
			'top': '-40px',
			'position': 'fixed',
			'display': 'none'
		}).hide();
		$("#mainpage").css('margin-top', '-45px');
	}
}

function customCSS(a) {
	$("#usercss").remove();
	a == "yes" ? $("head").append('<style id="usercss" type="text/css">' + USERCONFIG.csscode + '</style>') : '';
}

function setLayout() {
	playerLocation(USERCONFIG.player);
	userlistLocation(USERCONFIG.userlist);
	queueLocation(USERCONFIG.queue);
	queueSize(USERCONFIG.qsize);
	mainLocation(USERCONFIG.main);
	motdLocation(USERCONFIG.motd);
	headerMode(USERCONFIG.header);
	customCSS(USERCONFIG.css);
}

$(window).on("resize.windsize", function() {
	if ($("#chatwrap").hasClass('col-lg-12 col-md-12')) {
		$(this).height(this);
	} else {
		var newheight = $("#videowrap").height();
		$("#chatwrap").height(newheight);
		$("#messagebuffer, #userlist").height(newheight - 94);
	}
});

function fitPlayer(a) {
	if (a == "auto") {
		VW = $("#videowrap").width();
		VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
	} else {
		VH = a;
	}
	$("#videowrap").height(VH);
	$("#ytapiplayer").height(VH - 30);
}

function fitChat(a) {
	if (a == "auto") {
		VW = $("#messagebuffer").width();
		VH = $("#videowrap").outerHeight(true);
		$("#messagebuffer, #userlist").height(VH - 89);
	} else if (a == "normal") {
		VH = $("#videowrap").outerHeight(true) - 10;
		$("#messagebuffer, #userlist").height(VH - 94);
	} else {
		VH = a;
		$("#messagebuffer, #userlist").height(a - 97);
	}
	$("#chatwrap").height(VH);
	$("#chatavewrap").height(VH - $("#chatcontrols").outerHeight(true));
}

function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat(600);
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = (PINNED && USERCONFIG.qsize == "wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
	$("#chatwrap, #chatavewrap").removeClass().addClass(c);
	fitChat("auto");
}

function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />')
			.insertBefore("#playercontrols");
		refreshPlayer();
		NOPLAYER = false;
	}

	$("#main").show();
	$("#pinup-btn, #fullscreen-btn, #config-btn").prop('disabled', true);
	modesel.find("option[value='chMode'], option[value='rMode']").show();
	PINNED ? modesel.find("option[value='chMode']").hide() : '';

	if (a == "syMode") {

		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane").show();
		$("#pinup-btn, #fullscreen-btn, #config-btn").prop('disabled', false);
		$(".vjs-loading-spinner, .vjs-big-play-button, .vjs-remaining-time, .vjs-live-controls, .vjs-error-display").css('display', 'none');
		$(".vjs-control-content").css('visibility', 'hidden');
		$("#chatave-btn").prop('disabled', false);

		normalPlayer();

		c = (PINNED && USERCONFIG.qsize == "wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
		$("#chatwrap, #chatavewrap").removeClass().addClass(c);

		USERCONFIG.player == "right" ? playerLocation("right") : '';
		PINNED ? pinUp() : '';

		fitChat("normal");

	} else if (a == "kMode") {

		$("#videowrap").show();
		PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
		$("#fullscreen-btn").prop('disabled', true);
		$("#chatave-btn").prop('disabled', true);

		bigPlayer();

	} else if (a == "chMode") {

		$("#chatwrap").show();
		$("#chatave-btn").prop('disabled', false);

		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}

		bigChat();

	} else if (a == "rMode") {

		if (WEBKIT) {
			$("#main").hide();
		} else {
			PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}

		!PINNED ? $("#min-layout").parent().show() : '';

	}
	scrollChat();
}

function changeWelcomeText() {
	if (CLIENT.rank > 0) {
		$("#welcome").html($("#welcome").html().replace(/Welcome/, CustomCaptions_Array.welcome));
	}
}

function changeMOTD() {
	motdtabswrap = $('<center id="motdtabswrap" />').appendTo("#motd");
	motdtabscontent = $('<div id="motdtabscontent">').appendTo("#motd");
	for (var i in MOTDTabs_Array) {
		btn = $('<button class="btn btn-default motdtabs-btn" tab="' + i + '">')
			.text(MOTDTabs_Array[i][0])
			.appendTo(motdtabswrap)
			.on("click", function() {
				if ($(this).hasClass('btn-success')) {
					$(this).removeClass('btn-success');
					motdtabscontent.html('');
				} else {
					$(".motdtabs-btn").removeClass('btn-success');
					$(this).addClass('btn-success');
					nr = $(this).attr('tab');
					motdtabscontent.html(MOTDTabs_Array[nr][1]);
				}
				if ($('.motdtabs-btn').attr('tab') === "0") {
					setOpt(CHANNEL.name + "_updatehash", UPHASH);
				}
			});
		if ($('.motdtabs-btn').attr('tab') === "0") {
			UPHASH = MOTDTabs_Array[0][1];
			if (USERCONFIG.updatehash !== UPHASH) {
				MOTDYES = true;
				setOpt(CHANNEL.name + "_motdyes", MOTDYES);
				$('.motdtabs-btn[tab="0"]').addClass('btn-success');
				motdtabscontent.html(UPHASH);
			}
		}
	}
}

function setPanelProperties(div) {
	bgcolor = $("body").css('background-color');
	color = $("body").css('color');
	height = $("#userlist").height();
	width = $("#userlist").width();
	$(div).css({
		'background-color': bgcolor,
		'color': color,
		'height': height + 'px',
		'width': width + 'px'
	});
}

function prepareMessage(msg) {
	if (msg.match(/!/)) {
		var rnd;
		COMMAND = true;
		if (msg.match(/!commands/)) {
			msg = '➥ a,add,ask,boop,bot,calc,createemote,define,dice,giphy,give,leaderboard,makeitrain,movie,nominatemovie,nominatetv,now,party,pick,plot,poker,quote,random,roll,say,skip,spn,sticker,time,total,tv,tvrandom,urban,yoda,yt';

		} else if (msg.match(/!pick /)) {

			arr = msg.split("!pick ")[1].split(",");
			rnd = Math.round(Math.random() * (arr.length - 1));
			msg = '➥ ' + arr[rnd];

		} else if (msg.match(/!ask /)) {

			rnd = Math.round(Math.random() * (AskAnswers_Array.length - 1));
			msg = '➥ ' + AskAnswers_Array[rnd];

		} else if (msg.match(/!time/)) {

			var h = new Date().getHours();
			h < 10 ? h = '0' + h : '';
			var m = new Date().getMinutes();
			m < 10 ? m = '0' + m : '';
			msg = '➥ Current time: ' + h + ':' + m;

		} else if (msg.match(/!dice/)) {

			rnd = Math.round(Math.random() * 5) + 1;
			msg = '➥ ' +  rnd;

		} else if (msg.match(/!roll/)) {

			rnd = Math.round(Math.random() * 999);
			rnd < 100 ? rnd = "0" + rnd : '';
			rnd < 10 ? rnd = "0" + rnd : '';
			msg = '➥ ' + rnd;

		} else if (msg.match(/!random/)) {

			rnd = Math.round(Math.random() * (Movie_Array.length - 1));
			msg = '➥ ' + Movie_Array[rnd][0] + ' - ' + Movie_Array[rnd][1];

		} else if (msg.match(/!tvrandom/)) {

			rnd = Math.round(Math.random() * (TV_Array.length - 1));
			msg = '➥ ' + TV_Array[rnd];

		} else if (msg.match(/!calc /)) {

			funcsh = msg.split("!calc ");
			msg = '➥ ' + eval(funcsh[1]);

		} else if (msg.match(/!skip/) && hasPermission("voteskip")) {

			socket.emit("voteskip");
			msg = '➥ Current item voteskipped';

		} else if (msg.match(/!next/) && hasPermission("playlistjump")) {

			socket.emit("playNext");
			msg = '➥ Started playing next item';

		} else if (msg.match(/!delete/) && hasPermission("playlistdelete")) {

			len = $("#queue").children().length;
			uid = $("#queue .queue_entry:nth-child(" + len + ")").data("uid");
			socket.emit("delete", uid);
			msg = '➥ last item deleted.';

		} else if (msg.match(/!bump/) && hasPermission("playlistmove")) {

			last = $("#queue").children().length;
			uid = $("#queue .queue_entry:nth-child(" + last + ")").data("uid");
			title = $("#queue .queue_entry:nth-child(" + last + ") .qe_title").html();
			socket.emit("moveMedia", {
				from: uid,
				after: PL_CURRENT
			});
			msg = '➥ Last item bumped to next: ' + title;

		} else if (msg.match(/!add /) && hasPermission("playlistadd")) {

			parsed = parseMediaLink(msg.split("!add ")[1]);
			if (parsed.id === null) {
				msg = '➥ Error: Wrong link.';
			} else {
				socket.emit("queue", {
					id: parsed.id,
					pos: "end",
					type: parsed.type,
					temp: $(".add-temp").prop("checked")
				});
				msg = '➥ Video added to end.';
			}

		} else if (msg.match(/!now/)) {

			msg = '➥ Now playing: ' + $("#currenttitle").html();

		} else if (msg.match(/!party/)) {

			partyTime();
			msg = '➥ [fs][f]PARTY TIME!!![/fs]';

		} else {
			COMMAND = false;
		}
	}
	return msg;
}

function partyTime() {
	IMBA.volume = 0.6;
	IMBA.play();
	mutePlayer();
	inbix = setInterval(function() {
		inba();
	}, 200);
	setTimeout(function() {
		unmutePlayer();
		BGCHANGE = 0;
		clearInterval(inbix);
		$("body").css({
			'background-image': '',
			'background-color': ''
		});
		scrollChat();
	}, 12000);
}

BOOPER = new Audio("/boop.wav");
socket.on("chatMsg", function(data) {
	wonmsg = RegExp(CLIENT.name + ' won the Message of the Day Award');
	if (data.username === 'ChillTVBot' && data.msg.match(wonmsg)) {
		partyTime();
	}
	if (data.msg.match(/!boop/)) {
		if (USEROPTS.boop === 'always' || USEROPTS.boop === 'onlyping') {
			BOOPER.play();
		}
	}
});

function insertText(str) {
	$("#chatline").val($("#chatline").val() + str).focus();
}

function mutePlayer() {
	if (PLAYER.mediaType === 'gd') {
		console.log(PLAYER);
		SAVEVOLUME = PLAYER.player.volume() * 100;
		setOpt(CHANNEL.name + "_savevolume", SAVEVOLUME);
		PLAYER.setVolume(0);
	} else if (PLAYER.mediaType === 'yt') {
		console.log(PLAYER);
		SAVEVOLUME = PLAYER.yt.getVolume();
		setOpt(CHANNEL.name + "_savevolume", SAVEVOLUME);
		PLAYER.yt.setVolume(0);
	}
}

function unmutePlayer() {
	if (PLAYER.mediaType === 'gd') {
		if (SAVEVOLUME === 0) {
			PLAYER.setVolume(1);
		} else {
			PLAYER.setVolume(SAVEVOLUME / 100);
		}
	} else if (PLAYER.mediaType === 'yt') {
		if (SAVEVOLUME === 0) {
			PLAYER.setVolume(100);
		} else {
			PLAYER.setVolume(SAVEVOLUME);
		}
	}
}

function toggleMuteBtn() {
	clearInterval(MUTEBTN);
	if (MUTED && PLAYER) {
		mutePlayer();
		$("#muteplayer-btn").addClass('btn-danger').attr('title', 'Unmute player');
	} else if (PLAYER) {
		unmutePlayer();
		$("#muteplayer-btn").removeClass('btn-danger').attr('title', 'Mute player');
	}
}

function toggleModPanel() {
	if (CLIENT.rank < 2) {
		modbtn.hide();
	} else {
		modbtn.show();
		HASH = '';
		for (var i in ModPanel_Array) {
			namee = ModPanel_Array[i][0];
			(namee === "" || namee === CLIENT.name) ? HASH += '' + ModPanel_Array[i][1].length: '';
		}
		if (HASH != USERCONFIG.modhash) {
			modbtn.addClass('btn-danger');
		}
	}
}

function changeSkipText() {
	$("#voteskip").html(CustomCaptions_Array.voteskip + ' ' + $("#voteskip").html());
}

function setUserCSS() {
	$("#chanexternalcss").detach().appendTo("head");
	$("#chanexternalcss-fix").remove();

	cssfix = '#mainpage {padding-top:52px}'
	+ '\n #main > div, #playlistrow > div {padding-left:5px; padding-right:5px; margin-top:5px; margin-bottom:5px} '
	+ '\n #motdwrap {margin:5px -10px} '
	+ '\n #announcements .alert {margin:0px -10px 5px} '
	+ '\n #drinkcount {margin:0px} '
	+ '\n body { '
	+ '\n   background: url(https://i.ytimg.com/vi/jqMmW2mhAhY/maxresdefault.jpg) no-repeat center center fixed; '
	+ '\n   -webkit-background-size: cover;'
	+ '\n   -moz-background-size: cover;'
	+ '\n   -o-background-size: cover;'
	+ '\n   background-size: cover;'
	+ '\n   overflow-x:hidden;'
	+ '\n   background-color: black;'
	+ '\n }'
	+ '\n '
	+ '\n table {width:100%; border-color:#000000; background-color:#000000; background-color:black; background-color:rgba(0, 0, 0, 0)}'
	+ '\n '
	+ '\n p {margin:0 0 0 0}'
	+ '\n '
	+ '\n .profile-box {background: url(https://i.imgur.com/GERVS8N.jpg) no-repeat center center fixed}'
	+ '\n '
	+ '\n #embed-help, a {color: #2a9fd6}'
	+ '\n '
	+ '\n .glyphicon-star-empty {color: #FFD700}'
	+ '\n .glyphicon-time {color: red}'
	+ '\n '
	+ '\n .userlist_owner, .userlist_op, .username {font-family: "Helvetica Neue", Helvetica, Arial, sans-serif}'
	+ '\n .userlist_item {font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif}'
	+ '\n '
	+ '\n #userlist  div.userlist_item span.userlist_owner, #messagebuffer span.userlist_owner strong.username {color:#FFA500}'
	+ '\n #userlist  div.userlist_item span.userlist_op, #messagebuffer span.userlist_op strong.username {color:#008000}'
	+ '\n #userlist  div.userlist_item span.userlist_guest, #messagebuffer span.userlist_guest strong.username {color:gray}'
	+ '\n '
	+ '\n #messagebuffer div span:not(.userlist_owner):not(.userlist_op):not(.userlist_guest) strong.username, .userlist_item {color: #604DBF}'
	+ '\n '
	+ '\n .timestamp {font-family: "Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif; color: #888; font-size: 10px}'
	+ '\n .spoiler:hover {color:white}'
	+ '\n .seriesexpand:hover {color:grey;border-color:grey}'
	+ '\n '
	+ '\n .nick-hover {background-color: #232328}'
	+ '\n .nick-highlight {background-color: #232328}'
	+ '\n '
	+ '\n #messagebuffer, .pm-panel {background-color: #000000; border: 1px solid #000000}'
	+ '\n '
	+ '\n #userlist {border: 1px solid #000000; overflow-y: auto}'
	+ '\n '
	+ '\n #chatheader {background-color: #000000; border: 1px solid #000000; color: #8D8D8D; font-weight: 500}'
	+ '\n '
	+ '\n #us-default-quality {display:inline-block; width:125px; height:30px; padding:0; color:black; background-color:#CCCCFF}'
	+ '\n '
	+ '\n .container {background-color: #000000}'
	+ '\n '
	+ '\n #drinkcount {background-color: #000000; color: red; text-align: center; font-weight: bold; font-size:30px}'
	+ '\n .drink {margin:2px 2px; padding:1px; border: 2px solid #ff0000}'
	+ '\n .poll-notify {color:#6200bb; font-size:14px}'
	+ '\n '
	+ '\n .btn {text-shadow:2px 2px 5px #2E004C; color:#CCCCFF; text-transform:uppercase; font-weight:bolder}'
	+ '\n '
	+ '\n .modal-dialog {margin-top:10px}'
	+ '\n #emotelist .modal-header, #emotelist .modal-footer {display:none}'
	+ '\n #emotelist .modal {bottom:1}'
	+ '\n .pagination {margin: 4px 0 0 0}'
	+ '\n .modal-body {padding: 5px 20px 5px 20px}'
	+ '\n '
	+ '\n .navbar-brand {cursor:default}'
	+ '\n '
	+ '\n #motdwrap {padding: 1px; border-color:#000000; background-color: black}'
	+ '\n #menubtn, #userlisttoggle, #db-btn, #antiafk, #randombtn, #modflair, #trivbtn {color:#FF0000}'
	+ '\n #menubtn:hover, #userlisttoggle:hover, #db-btn:hover, #antiafk:hover, #randombtn:hover, #modflair:hover, #trivbtn:hover {color:#FF0000}'
	+ '\n #userlisttoggle {margin-bottom: 1px; font-size: 14px; background-color:#424242}'
	+ '\n #menubtn:hover, #userlisttoggle:hover {margin-bottom: 1px; font-size: 14px}'
	+ '\n '
	+ '\n #rightpane, #leftpane {margin-top:5px !important; margin-bottom:5px !important}'
	+ '\n '
	+ '\n #getplaylist {display:none}'
	+ '\n '
	+ '\n #leftpane .well {margin-bottom:5px}'
	+ '\n .well {background-color:#000000; background-color:black; background-color:rgba(0, 0, 0, 1)}'
	+ '\n '
	+ '\n .qe_title {margin-left:4px; pointer-events: none; cursor: default}'
	+ '\n '
	+ '\n #footer {padding-bottom:5px; height:50px; background-color: #000000}'
	+ '\n '
	+ '\n #chanavatar {margin-right:10px}'
	+ '\n '
	+ '\n .row {margin-right:-10px}'
	+ '\n '
	+ '\n #motdlogo {margin-bottom:1px}'
	+ '\n #motdtabswrap {margin-top:1px}'
	+ '\n .motdtabs-btn {margin-right:1px}'
	+ '\n #motdtabscontent {padding:1px 1px; color:rgb(127, 191, 255); background-color:#000000; background-color:black; background-color:rgba(0, 0, 0, 0)}'
	+ '\n '
	+ '\n ol, ul {margin-bottom: 0}'
	+ '\n '
	+ '\n #attbarrow-outer {padding:0 5px}'
	+ '\n #attbar {height:22px; background-color:white}'
	+ '\n '
	+ '\n #currenttitle, #plmeta, #usercount {border:2px solid #000; color: #A9A9A9; font-weight:900; white-space:nowrap; overflow:hidden;'
	+ '\n 	text-overflow:ellipsis}'
	+ '\n #currenttitle, #plmeta {padding:0 5px 0 5px'
	+ '\n }'
	+ '\n #ytapiplayer .alert {text-align:left; margin:0 -15px}'
	+ '\n '
	+ '\n #coverpl {position:absolute; left:5px; top:0; background-color:black; background-size:100%; background-repeat:no-repeat; background-position:center center}'
	+ '\n '
	+ '\n #sounds-dropdown, #chatfunc-dropdown, #fontspanel, #webmpanel {'
	+ '\n 	position:absolute; top:22px; display:block;'
	+ '\n 	overflow-y:auto; overflow-x:hidden; margin-right:5px;'
	+ '\n }'
	+ '\n #cbtn0, #cbtn1 {margin: 0 7px 0 7px}'
	+ '\n #cbtn38, #cbtn39 {margin: 0 7px 0 7px}'
	+ '\n #cbtn38 {color:red}'
	+ '\n #cbtn39 {color:white}'
	+ '\n #cbtn40, #cbtn41, #cbtn42, #cbtn43, #cbtn44, #cbtn45, #cbtn46, #cbtn47 {color:black}'
	+ '\n #muteall-btn, #spamclear-btn, #adminnews-btn {width:100%}'
	+ '\n '
	+ '\n .avatar-embed-small {max-height:30px; max-width:30px; margin-right:3px}'
	+ '\n .card-embed-small {height:50px}'
	+ '\n .channel-emote, .embedimg, .image-embed-small, .image-spoiler {max-width:200px; max-height:115px; cursor:pointer}'
	+ '\n .embedvid, .indvideo {max-width:200px; max-height:125px; border:0; vertical-align:middle}'
	+ '\n '
	+ '\n #chatpanel {margin-top:0; margin-bottom:0}'
	+ '\n #fontspanel, #webmpanel {text-align:center; max-width:700px; margin:0 auto 5px auto; border:solid 2px #CCCCCC; border-radius:6px}'
	+ '\n #embedform {margin: 0 auto 0 auto; font-size:10px}'
	+ '\n #embedform {background-color:black; text-align:center; border:solid 1px #CCCCCC; position:relative; display: table}'
	+ '\n .dropdown-menu {font-size:12px; margin:0}'
	+ '\n .dropdown-menu .divider {margin:0}'
	+ '\n #embedwrap, .embedname {padding: 0 0 0 0}'
	+ '\n .fluidpanel {max-width:1200px !important}'
	+ '\n '
	+ '\n input[type="checkbox"] {'
	+ '\n     margin: 1px 0 0;'
	+ '\n 		background-color: #CCCCFF;'
	+ '\n }'
	+ '\n .queuebytext, .queue_time {color:#CCCCFF}'
	+ '\n '
	+ '\n #rightpane-inner .col-md-12 .alert .alert-danger {margin-bottom:0}'
	+ '\n '
	+ '\n #fontsbtnwrap .btn, #unibtnwrap .btn, #effectbtnwrap .btn, #familybtnwrap .btn {padding: 0 9px 0 9px}'
	+ '\n '
	+ '\n #advplcontrols {width:100%; padding-top:10px}'
	+ '\n #advplcontrols button {width:25%}'
	+ '\n '
	+ '\n #leftpanecontrols {margin-right:5px}'
	+ '\n '
	+ '\n #configbtnwrap, #modewrap, #themewrap, #funcbtnwrap, #cleardbwrap, #gallery-well, #hidewrap, #embedwrap {'
	+ '\n 	text-align:center;'
	+ '\n }'
	+ '\n .conf-cap {padding-top:9px}'
	+ '\n #mode-sel, #theme-sel, #gal-sel {width:80%; margin:0 auto}'
	+ '\n .theme-header {text-align:center; font-size:9pt; font-style:italic}'
	+ '\n #embed-help, #layoutlist {cursor:pointer;}'
	+ '\n '
	+ '\n #leftfooter {font-size:10pt}'
	+ '\n div[id="leftfooter"] {text-align:center; margin-bottom:5px}'
	+ '\n #rightfooter {float:right; margin:0 0 15px 15px}'
	+ '\n '
	+ '\n .relative {position:relative}'
	+ '\n '
	+ '\n .covered {visibility:hidden}'
	+ '\n '
	+ '\n .dist {background-color:gold; color:red; font-size:12pt; font-family:times new roman; padding:3px}'
	+ '\n ';

	$("head").append('<style id="chanexternalcss-fix" type="text/css">' + cssfix + '</style>');
	$("#usertheme").attr('href', '/css/themes/cyborg.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/") > -1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="' + USERTHEME + '"></link>')
			.appendTo("head");
	}
	$("#usercss").remove();
	if (USERCONFIG.css != "no") {
		$("head").append('<style id="usercss" type="text/css">' + USERCONFIG.csscode + '</style>');
	}
}

function showChatHelp() {
	createTemp('Chat Commands');
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	body.append('<strong>Fonts/Effects Commands</strong><br /><br />');
	html = '<li><code>↵ ENTER</code> - focus the chatline</li><li><code>[st]</code> - striked-through text</li><li><code>[bw]</code> - black text on white background</li><li><code>[t]</code> - trivia tag</li><li><code>[d]</code> - distinguished text (red on yelllow background)</li><li><code>[f]</code> - text with a fire effect</li><li><code>/me</code> - showing an action-style message (username does something, e.g. <i>/me is dancing</i>)</li><li><code>/sp</code> - hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)</li><li><code>/afk</code> - toggling your AFK (away from keyboard) status (<i>/afk</i>)</li><li><code>/say</code> - shout in large red text (e.g. <i>/say HELLO</i>)</li><li><code>/d</code> - take a drink (leader+ only, add a positive or negative number to add/subtract total drinks, e.g. <i>/d, /d4, /d-7</i>)</li><li><code>[fs]</code><i>text</i><code>[/fs]</code> - fast scrolling text (e.g. <i>[fs]Attention![/fs]</i>)</li><li><code>[ss]</code><i>text</i><code>[/ss]</code> - slow scrolling text (e.g. <i>[ss]hello there[/ss]</i>)</li><br />';
	$('<ul />').html(html).appendTo(body);
	arr = {
		'commands': 'get a list of all available commands',
		'pick': 'choosing a random option from a list separated by commas (e.g. <i>!pick japan,korea,china</i>)',
		'random': 'randomly pick a movie from the movie list (e.g. <i>!random</i>)',
		'tvrandom': 'randomly pick a TV show from the TV list (e.g. <i>!tvrandom</i>)',
		'ask': 'asking a question with yes/no type answer (e.g. <i>!ask Will this channel be popular?</i>)',
		'dice': 'rolling dice (e.g. <i>!dice</i>)',
		'roll': 'rolling 3-digit number (e.g. <i>!roll</i>)',
		'time': 'displaying current time (e.g. <i>!time</i>)',
		'now': 'displaying current playing title (e.g. <i>!now</i>)',
		'calc': 'calculating a math operation (all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
		'skip': 'voteskip current item (e.g. <i>!skip</i>)',
		'add': 'adding a link to the end of playlist (e.g. <i>!add https://www.youtube.com/watch?v=29FFHC2D12Q</i>)',
		'party': 'take off your pants and dance (seizure warning, e.g. <i>!party</i>)',
		'say': 'text-to-speech robot voice in english (e.g. <i>!say Hello World!</i>)',
		'spn': 'text-to-speech robot voice with spanish accent (e.g. <i>!spn \'Ello papi</i>)',
		'boop': 'make a boop sound to get people\'s attention (e.g. <i>!boop</i>)',
	}
	body.append('<strong>Script Commands</strong><br /><br />');
	ul = $('<ul />').appendTo(body);
	for (var cmd in arr) {
		ul.append('<li><code>!' + cmd + '</code> - ' + arr[cmd] + '</li>');
	}
	arr2 = {
		'giphy': 'get a random gif from giphy.com that matches your search term (e.g. <i>!giphy funny dance</i>)',
		'sticker': 'replaces your phrase/expression with a random giphy sticker search result (e.g. <i>!sticker i love you</i>)',
		'movie': 'get a movie from omdbapi.com that matches your movie title, and optionally, the year in parentheses for movies with the same title (e.g. <i>!movie the avengers</i> OR <i>!movie the avengers (1942)</i> OR <i>!movie</i>)',
		'tv': 'get a series from omdbapi.com that matches your series title, and optionally, the year in parentheses for series with the same title (e.g. <i>!tv the office</i> OR <i>!tv the office (2001)</i> OR <i>!tv</i>)',
		'plot': 'get the plot of movie/series from omdbapi.com that matches your title, and optionally, the year in parentheses for movie/series with the same title (e.g. <i>!plot braveheart</i> OR <i>!plot braveheart (1925)</i> OR <i>!plot</i>)',
		'define': 'define a word (e.g. <i>!define irony</i>)',
		'urban': 'define a word with urban dictionary (e.g. <i>!urban stahp</i>)',
		'yoda': 'your message is replaced using yoda\'s dialect (e.g. <i>!yoda i am a puppet</i>)',
		'quote': 'get a random famous quote (e.g. <i>!quote</i>)',
		'yt': 'add the first result youtube video from your search term to the end of the playlist (e.g. <i>!yt call me maybe</i>)',
	}
	body.append('<br /><strong>API Commands</strong><br /><br />');
	ul2 = $('<ul />').appendTo(body);
	for (var cmd2 in arr2) {
		ul2.append('<li><code>!' + cmd2 + '</code> - ' + arr2[cmd2] + '</li>');
	}
	body.append('<br /><strong>ChillTVBot Commands<br /><br />');
	html1 = '<li><code>!a</code> - answer a trivia question asked by the bot (e.g. <i>!a george washington</i>)</li><li><code>!bot</code> - say something to the bot and get a reply (e.g. <i>!bot hi, how are you</i>)</li><li><code>!poker</code> - start a round of Texas Hold\'em <u><a href="https://www.youtube.com/watch?v=cnm_V7A-G6c" target="_blank">Learn Texas Hold\'em in Less Than 4 Minutes!</a></u> (Some rules differ: High cards are shared, no sidepots, max bet/raise is the lowest balance, lowest balance bets first, blind is always $100, free $1000 buy-in for balances of $0) (e.g. <i>!poker</i>)</li><li><code>!total</code> - check the amount of cash you have or check how much someone else has (e.g. <i>!total</i> OR <i>!total ChillTVBot</i>)</li><li><code>!give</code> - give someone (currently online) any amount of your cash, optionally with a reason. (e.g. <i>!give 500 to ChillTVBot</i> OR <i>!give 500 to ChillTVBot for being my friend</i>)</li><li><code>!makeitrain</code> - give 0.5% of your cash divided evenly to all currently online active trivia players with a make-it-rain gif from giphy (e.g. <i>!makeitrain</i>)</li><li><code>!leaderboard</code> - View the trivia leaderboard (e.g. <i>!leaderboard</i>)</li><li><code>!nominatemovie</code> - Nominate a movie or movie marathon. Use the format "title (year)" or "title Marathon". (e.g. <i>!nominatemovie Batman (1989)</i> OR <i>!nominatemovie Alien Marathon</i>)</li><li><code>!nominatetv</code> - Nominate a tv episode or marathon. User the format "Title (Year(-)(Year)) S00E00(E00)(a/b/c)" (e.g. <i>!nominatetv 2 Stupid Dogs (1993–1995) S01E02a</i> OR <i>!nominatetv Game of Thrones (2011–) Marathon</i>)</li><li><code>!createemote</code> - create an emote with a name between two colons and an image url (e.g. <i>!createemote :cool: https://url.gif</i>)</li>';
	$('<ul />').html(html1).appendTo(body);
	body.append('<br /><strong>Sound Commands</strong><br /><br />');
	html2 = '<li><code>:laugh:</code> | <code>:assandtitties:</code> | <code>:calmdown:</code> | <code>:gawddangitbobbeh:</code> | <code>:imoldgregg:</code> | <code>:poop:</code> | <code>:burp:</code> | <code>:mow:</code> | <code>:moo:</code></li>';
	$('<ul />').html(html2).appendTo(body);
}

voicesbtn = $('<span id="db-btn" class="label label-default pull-right pointer" title="Chat Volume">Volume</span>');

function showSoundsPanel() {
	$("#userlist").append('<div id="sounds-dropdown" />');
	setPanelProperties("#sounds-dropdown");

	muteallbtn = $('<button id="muteall-btn" class="btn btn-xs btn-default">Mute All</button>')
		.appendTo("#sounds-dropdown")
		.on("click", function() {
			if (VOICES) {
				$(this).text('Unmute All').addClass('btn-danger');
				voicesbtn.removeClass('label-success').addClass('btn-danger').attr('title', 'Unmute chat voices');
				VOICES = false;
				SOUNDSPANEL = false;
				$("#sounds-dropdown").remove();
			} else {
				$(this).text('Mute All').removeClass('btn-danger');
				voicesbtn.removeClass('btn-danger').addClass('label-success').attr('title', 'Mute chat voices');
				VOICES = true;
			}
			MUTESOUND = !MUTESOUND;
			setOpt(CHANNEL.name + "_mutesound", MUTESOUND);
		});
	!VOICES ? muteallbtn.text('Unmute All').addClass('btn-danger') : '';

	$("#sounds-dropdown").append('<div>Sounds level:</div>');

	lvlgroup = $('<div id="lvlgroup" class="btn-group"></div>')
		.appendTo("#sounds-dropdown");

	for (i = 1; i <= 5; i++) {
		btn = $('<button class="btn btn-xs btn-default" id="lvlvol' + i + '" level="' + i + '" />')
			.html(i)
			.appendTo(lvlgroup)
			.on("click", function() {
				$("#lvlvol" + SOUNDSLVL).removeClass('btn-success');
				SOUNDSLVL = $(this).attr('level');
				setOpt(CHANNEL.name + "_soundslvl", SOUNDSLVL);
				$(this).addClass('btn-success');
			});
	}
	$("#lvlvol" + SOUNDSLVL).addClass('btn-success');

	$("#sounds-dropdown").append('<div>Select users to mute sounds:</div>');

	mutegroup = $('<div id="mutegroup" class="btn-group-vertical"></div>').appendTo("#sounds-dropdown");

	$(".userlist_item").each(function() {
		user = $(this).find("span:nth-child(2)").html();
		btn = $('<button class="btn btn-xs btn-default" name="' + user + '" />')
			.html(user)
			.appendTo(mutegroup)
			.on("click", function() {
				namel = $(this).attr('name');
				if (namel in MUTEDVOICES && MUTEDVOICES[namel] == "1") {
					$(this).removeClass('btn-danger');
					MUTEDVOICES[namel] = 0;
				} else {
					$(this).addClass('btn-danger');
					MUTEDVOICES[namel] = 1;
				}
			});
		(user in MUTEDVOICES && MUTEDVOICES[user] == "1") ? btn.addClass('btn-danger'): '';
	});
}
!MUTESOUND ? VOICES = false && $("#muteall-btn").text('Unmute All').addClass('btn-danger') : '';

function showModPanel() {
	createTemp("Moderator Panel");
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	html = '';
	for (var i in ModPanel_Array) {
		namet = ModPanel_Array[i][0];
		mess = ModPanel_Array[i][1];
		if (namet === "") {
			html += '<i class="glyphicon glyphicon-comment"></i> ' + mess + '<br /><br />';
		} else if (namet == CLIENT.name) {
			html += '<i class="glyphicon glyphicon-comment"></i> <i class="glyphicon glyphicon-user"></i> (to: ' + CLIENT.name + ') → ' + mess + '<br /><br />';
		}
	}
	body.append(html);
	$("#mod-btn").removeClass('btn-danger').html('<i class="glyphicon glyphicon-tasks"></i>');
	setOpt(CHANNEL.name + "_modhash", HASH);
}

/*
function showInfo() {
	title = $(".queue_active .qe_title").text();
	duration = $(".queue_active .qe_time").html();
	contr = $(".queue_active .queuebytext").text();
	if (contr === '') {
		text = 'Nothing Playing - Add Something!';
	} else {
		text = title + ' [' + duration + '] ' + contr;
	}
	$("#currenttitle").html(text).attr("title", text);
}

socket.on("changeMedia", function() {
	showInfo();
});*/

function coverPlayer() {
	$("#videowrap").addClass('relative');
	w = $("#ytapiplayer").css('width');
	h = $("#videowrap").css('height').replace('px', '') - 54;
	coverpl = $('<div id="coverpl" />')
		.css({
			'width': w,
			'height': h + 'px',
			'margin-top': '24px'
		})
		.appendTo($("#videowrap"));
	hideplayerbtn.addClass('btn-danger').attr('title', 'Show player');
}

function showPlayer() {
	coverpl.remove();
	hideplayerbtn.removeClass('btn-danger').attr('title', 'Hide player');
	$("#videowrap").removeClass('relative');
}

function displayConfigPanel() {
	if (!LAYOUT) {
		createModal('Layout');
		outer.attr('id', 'layoutmodal')
		LAYOUT = true;
		$("body").css('overflow', 'hidden');
		$("#layoutmodal").on("hidden.bs.modal", function() {
			$("#layoutmodal").hide();
			$("body").css('overflow', 'auto');
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					scrollChat();
				}, 100);
			}
		});
		body.append(configwrap);
		FLUID ? $("#fluid-layout").prop('checked', 'true') : '';
	} else {
		$("#layoutmodal").show();
		$("#layoutmodal").children().show();
		$("#layoutmodal").on("hidden.bs.modal", function() {
			$("#layoutmodal").hide();
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					scrollChat();
				}, 100);
			}
		});
		$("#layoutmodal").modal();
	}
	if (USEROPTS.hidevid) {
		$("#config-btn, #mode-sel").prop('disabled', true);
	}
	if ($("#videowrap").hasClass('col-lg-9 col-md-9') || $("#chatave-btn").hasClass('btn-success')) {
		$("#config-btn, #mode-sel").prop('disabled', true);
	}
	setOpt(CHANNEL.name + "_layoutbox", LAYOUTBOX);
}

var CONFIG = false;

function addOption(txt, elem) {
	g = $('<div class="form-group" />').appendTo(form);
	$('<label class="control-label col-sm-4" />').text(txt).appendTo(g);
	c = $('<div class="col-sm-8" />').appendTo(g);
	elem.appendTo(c);
}

function showConfig() {
	if (!CONFIG) {
		CONFIG = true;
		createModal("Layout Configuration");
		outer.attr('id', 'config');
		$("body").css('overflow', 'hidden');
		$("#config").on("hidden.bs.modal", function() {
			if (LAYOUT) {
				$("#layoutmodal").show();
				$("#layoutmodal").children().show();
				$("#layoutmodal").modal();
				$("#layoutmodal.modal-open, #layoutmodal.modal").css({
					'overflow-x': 'hidden',
					'overflow-y': 'auto'
				})
				$("body").css('overflow', 'hidden');
			} else {
				$("body").css('overflow', 'auto');
			}
			$("#config").hide();
			scrollChat();
		});

		form = $('<form class="form-horizontal" />').appendTo(body);

		playerlocation = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
		$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
		$('<option />').attr('value', 'center').text('center').appendTo(playerlocation);
		playerlocation.val(USERCONFIG.player);
		addOption('Player location', playerlocation);

		userlistlocation = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
		$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
		userlistlocation.val(USERCONFIG.userlist);
		addOption('Userlist location', userlistlocation);

		queuelocation = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
		$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
		$('<option />').attr('value', 'center').text('center').appendTo(queuelocation);
		queuelocation.val(USERCONFIG.queue);
		addOption('Queue location', queuelocation);

		queuesize = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
		$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
		queuesize.val(USERCONFIG.qsize);
		addOption('Queue column size', queuesize);

		mainlocation = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
		$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
		mainlocation.val(USERCONFIG.main);
		addOption('Player & chat', mainlocation);

		motdlocation = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
		$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
		motdlocation.val(USERCONFIG.motd);
		addOption('MOTD & announcements', motdlocation);

		headermode = $('<select />').addClass('form-control')
		$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
		$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
		$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
		$('<option />').attr('value', 'none').text('none').appendTo(headermode);
		headermode.val(USERCONFIG.header);
		addOption('Header menu', headermode);

		customcss = $('<select />').addClass('form-control');
		$('<option />').attr('value', 'no').text('no').appendTo(customcss);
		$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
		customcss.val(USERCONFIG.css);
		addOption('Custom CSS', customcss);

		usercss = $('<textarea rows="8" />').addClass('form-control')
			.attr('placeholder', 'Insert CSS code');
		usercss.val(USERCONFIG.csscode);
		addOption('CSS code', usercss);

		if (USERCONFIG.css == "no") {
			usercss.parent().parent().hide();
		}

		submit = $('<button class="btn btn-default btn-success" />').text("Save changes").appendTo(footer);
		reset = $('<button class="btn btn-default pull-left" />').text('Default').appendTo(footer);
		column = $('<button class="btn btn-default pull-left" />').text('One column').appendTo(footer);

		customcss.on("change", function() {
			if (customcss.val() == "yes") {
				usercss.parent().parent().show();
			} else {
				usercss.parent().parent().hide();
			}
		});

		submit.on("click", function() {
			outer.modal('hide');

			USERCONFIG.player = playerlocation.val();
			setOpt(CHANNEL.name + "_player", playerlocation.val());

			USERCONFIG.userlist = userlistlocation.val();
			setOpt(CHANNEL.name + "_userlist", userlistlocation.val());

			USERCONFIG.queue = queuelocation.val();
			setOpt(CHANNEL.name + "_queue", queuelocation.val());

			USERCONFIG.qsize = queuesize.val();
			setOpt(CHANNEL.name + "_qsize", queuesize.val());

			USERCONFIG.main = mainlocation.val();
			setOpt(CHANNEL.name + "_main", mainlocation.val());

			USERCONFIG.motd = motdlocation.val();
			setOpt(CHANNEL.name + "_motd", motdlocation.val());

			USERCONFIG.header = headermode.val();
			setOpt(CHANNEL.name + "_header", headermode.val());

			if (customcss.val() == "yes") {
				USERCONFIG.csscode = usercss.val();
				setOpt(CHANNEL.name + "_csscode", usercss.val());
			}

			USERCONFIG.css = customcss.val();
			setOpt(CHANNEL.name + "_css", customcss.val());

			setUserCSS();
			setLayout();
			scrollChat();
			scrollQueue();
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					fitChat("normal")
					scrollChat();
				}, 100);
			}
		});

		reset.on("click", function() {
			outer.modal("hide");
			$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");

			USERCONFIG.player = defplayer;
			setOpt(CHANNEL.name + "_player", defplayer);

			USERCONFIG.userlist = defuserlist;
			setOpt(CHANNEL.name + "_userlist", defuserlist);

			USERCONFIG.queue = defqueue;
			setOpt(CHANNEL.name + "_queue", defqueue);

			USERCONFIG.qsize = "wide";
			setOpt(CHANNEL.name + "_qsize", "wide");

			USERCONFIG.main = "top";
			setOpt(CHANNEL.name + "_main", "top");

			USERCONFIG.motd = "top";
			setOpt(CHANNEL.name + "_motd", "top");

			USERCONFIG.header = "mouseover";
			setOpt(CHANNEL.name + "_header", "mouseover");

			USERCONFIG.css = "no";
			setOpt(CHANNEL.name + "_css", "no");

			setLayout();
			scrollChat();
			scrollQueue();
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					fitChat("normal")
					scrollChat();
				}, 100);
			}
		});

		column.on("click", function() {
			outer.modal("hide");

			USERCONFIG.player = "center";
			setOpt(CHANNEL.name + "_player", "center");

			USERCONFIG.userlist = "left";
			setOpt(CHANNEL.name + "_userlist", "left");

			USERCONFIG.queue = "center";
			setOpt(CHANNEL.name + "_queue", "center");

			USERCONFIG.main = "top";
			setOpt(CHANNEL.name + "_main", "top");

			USERCONFIG.motd = "bottom";
			setOpt(CHANNEL.name + "_motd", "bottom");

			USERCONFIG.header = "detached";
			setOpt(CHANNEL.name + "_header", "detached");

			setLayout();
			scrollChat();
			scrollQueue();
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					fitChat("normal")
					scrollChat();
				}, 100);
			}
		});
	} else {
		$("#config").show();
		$("#config").children().show();
		$("#config").on("hidden.bs.modal", function() {
			$("#config").hide();
			if (modesel.val() === "syMode") {
				setTimeout(function() {
					fitChat("normal")
					scrollChat();
				}, 100);
			}
		});
		$("#config").modal();
	}
}

function toggleFluidLayout() {
	if (FLUID) {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
	} else {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	}
	setMode(modesel.val())
	FLUID = !FLUID;
	setOpt(CHANNEL.name + "_fluid", FLUID);
	scrollChat();
}

function pinUp() {
	if (USERCONFIG.player == "left") {
		$("#videowrap").after($("#rightpane").detach());
	} else if (USERCONFIG.player == "right") {
		$("#videowrap").before($("#rightpane").detach());
	}
	if (USERCONFIG.queue == "left") {
		$("#leftpane").before($("#chatwrap").detach());
	} else if (USERCONFIG.queue == "right") {
		$("#leftpane").after($("#chatwrap").detach());
	}
	$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize == "wide") {
		$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Unpin playlist');
	$("#config-btn, #fullscreen-btn").prop('disabled', true);
	$("#min-layout").parent().hide();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").hide();
	PINNED = true;
}

function unPin() {
	if (USERCONFIG.queue == "left") {
		$("#leftpane").before($("#rightpane").detach());
	} else if (USERCONFIG.queue == "right") {
		$("#leftpane").after($("#rightpane").detach());
	}
	if (USERCONFIG.player == "left") {
		$("#videowrap").after($("#chatwrap").detach());
	} else if (USERCONFIG.player == "right") {
		$("#videowrap").before($("#chatwrap").detach());
	}
	$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize == "wide") {
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Pinup playlist to player');
	$("#config-btn, #fullscreen-btn").prop('disabled', false);
	$("#min-layout").parent().show();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").show();
	PINNED = false;
}

zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

setUserCSS();

$("body").addClass('fluid');
FLUID ? fluidLayout() : compactLayout();

$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');
$("#layout-link").remove();

$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append($('<div id="playercontrols" class="btn-group" />').detach());
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
CLIENT.rank > 1 ? $("#newpollbtn").attr('style', 'margin-left:15px').detach().insertBefore("#pollwrap") : '';
$("#plcontrol").prepend($("#showmediaurl").detach());

$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

$(document).ready(function() {
	$('<link id="chanfavicon" href="https://4cfb011406af36d13e040cf806ee71d1a622262a.googledrive.com/host/0BxOqtQNFy94vQ3E0UUI5bE9MdHc" type="image/x-icon" rel="shortcut icon" />')
		.appendTo("head");
});

text1 = 'Please use the "Personal Theme" selector by clicking Layout to select a theme for this channel. ';
text2 = 'Please use the "Click to configure" button by clicking Layout to configure this channel. ';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">' + text1 + '</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">' + text2 + '</p>');

$("#useroptions .modal-footer button:nth-child(1)").on("click", function() {
	USEROPTS.hidevid ? location.reload() : ''
	html = 'You may need to REFRESH the page for some settings to take place.';
	makeAlert("You have changed global User Preferences", html, "alert-info").appendTo("#announcements");
	setUserCSS();
	scrollQueue();
	scrollChat();
});

$(".navbar-brand").html('ChillTV');

if (CustomCaptions_Array.add !== "") {
	$("#showmediaurl").html(CustomCaptions_Array.add);
}
if (CustomCaptions_Array.refresh !== "") {
	$("#mediarefresh").html(CustomCaptions_Array.refresh);
}
if (CustomCaptions_Array.emotelist !== "") {
	$("#emotelistbtn").html(CustomCaptions_Array.emotelist);
}
if (CustomCaptions_Array.voteskip !== "") {
	changeSkipText();
}
if (CustomCaptions_Array.welcome !== "") {
	socket.on("login", changeWelcomeText);
	changeWelcomeText();
}

socket.on("setMotd", changeMOTD);
changeMOTD();

function inba() {
	$("body").css('background-image', 'url("https://24.media.tumblr.com/26864c030c1c1ec8de64cf68e1924796/tumblr_mljn923sFA1rocdlxo1_500.gif")');
	BGCHANGE++;
	BGCHANGE % 2 === 0 ? $("body").css('background-color', 'gold') : $("body").css('background-color', 'blue');
}


function afkLogout() {
	AFKLOGOUT = setTimeout(function() {
		$("#logoutform").submit();
	}, 3600000);
}
WARNED = false;
function logoutWarning() {
	WARNLOGOUT = setTimeout(function() {
		$('<div class="server-msg-disconnect">You will be logged out in 5 minutes for being afk.</div>').appendTo("#messagebuffer");
		scrollChat();
		BOOPER.play();
		WARNED = true;
	}, 3300000);
}
function welcomeBack() {
	if (WARNED) {
		$('<div class="server-msg-reconnect">Welcome back! The afk timer has been reset to 60 minutes.</div>').appendTo("#messagebuffer");
		scrollChat();
		BOOPER.play();
		WARNED = false;
	}
}
KEYDOWN = true;
MOUSEOVER = true;
if (CLIENT.rank > -1 && CLIENT.name !== 'ChillTVBot') {
	afkLogout();
	logoutWarning();
	$(window).on("mouseover", function() {
		if (MOUSEOVER) {
			MOUSEOVER = false;
			clearTimeout(AFKLOGOUT);
			clearTimeout(WARNLOGOUT);
			welcomeBack();
			afkLogout();
			logoutWarning();
			setTimeout(function() {
				MOUSEOVER = true;
			}, 1000);
		}
	});
	$(window).on("keydown", function() {
		if (KEYDOWN) {
			KEYDOWN = false
			clearTimeout(AFKLOGOUT);
			clearTimeout(WARNLOGOUT);
			welcomeBack();
			afkLogout();
			logoutWarning();
			setTimeout(function() {
				KEYDOWN = true;
			}, 1000);
		}
	});
}
socket.on("login", function() {
	if (CLIENT.rank === 0) {
		afkLogout();
		logoutWarning();
		$(window).on("mouseover", function() {
			if (MOUSEOVER) {
				MOUSEOVER = false;
				clearTimeout(AFKLOGOUT);
				clearTimeout(WARNLOGOUT);
				welcomeBack();
				afkLogout();
				logoutWarning();
				setTimeout(function() {
					MOUSEOVER = true;
				}, 1000);
			}
		});
		$(window).on("keydown", function() {
			if (KEYDOWN) {
				KEYDOWN = false
				clearTimeout(AFKLOGOUT);
				clearTimeout(WARNLOGOUT);
				welcomeBack();
				afkLogout();
				logoutWarning();
				setTimeout(function() {
					KEYDOWN = true;
				}, 1000);
			}
		});
	}
});

/*
ANTIAFK = true;

function antiAfk() {
	$("#userlist").find('span[class^=userlist]').each(function() {
		if ($(this).html() === CLIENT.name && $(this).css('font-style') === "italic") {
			socket.emit("chatMsg", {
				msg: '/afk'
			});
		}
	});
	AFKTIME = setTimeout(function() {
		antiAfk();
	}, 1000);
}

antiafkbtn = $('<span id="antiafk" class="label pull-right pointer btn-success" title="If you\'re going afk, please turn this off to allow accurate voteskipping">Antiafk</span>')
	.insertBefore("#modflair")
	.on("click", function() {
		if (!ANTIAFK) {
			ANTIAFK = true;
			$(this).removeClass('label-default').addClass('btn-success').attr('title', 'If you\'re going afk, please turn this off to allow accurate voteskipping');
			antiAfk();
			YUP = true;
			setOpt(CHANNEL.name + "_yup", YUP);
		} else {
			ANTIAFK = false;
			$(this).removeClass('btn-success').addClass('label-default').attr('title', 'Turn this on to prevent being discounted in voteskips');
			clearTimeout(AFKTIME);
			YUP = false;
			setOpt(CHANNEL.name + "_yup", YUP);
		}
	});

if (!YUP) {
	ANTIAFK = false;
	$("#antiafk").removeClass('btn-success').addClass('label-default').attr('title', 'Turn this on to prevent being discounted in voteskips');
} else {
	$("#antiafk").removeClass('label-default').addClass('btn-success').attr('title', 'If you\'re going afk, please turn this off to allow accurate voteskipping');
	antiAfk();
}
*/
/*
trivbtn = $('<span id="trivbtn" class="label pull-right pointer btn-success" title="Hide Trivia">Trivia</span>')
	.insertBefore("#modflair")
	.on("click", function() {
		if (!TRIVIT) {
			$(this).removeClass('label-default').addClass('btn-success').attr('title', 'Hide Trivia');
			TRIVIT = true;
			setOpt(CHANNEL.name + "_trivit", true);
			$('.trivia').attr('style', 'display:block');
			scrollChat();
		} else {
			$(this).removeClass('btn-success').addClass('label-default').attr('title', 'Show Trivia');
			TRIVIT = false;
			setOpt(CHANNEL.name + "_trivit", false);
			$('.trivia').attr('style', 'display:none');
		}
});
$('#messagebuffer .chat-msg-ChillTVBot').each(function() {
	if ($(this).children('span').last().text().match(/(Category|Clue|Answer|Correct):/)) {
		$(this).addClass('trivia');
	}
});
if (!TRIVIT) {
	trivbtn.removeClass('btn-success').addClass('label-default').attr('title', 'Show Trivia');
	$('.trivia').attr('style', 'display:none');
}
*/
var WAITFORONE = false;
aaretries = 0;

Callbacks.clearchat = function() {
  $("#messagebuffer").html("<span style='color:red'>Chat Cleared</span>"),
  LASTCHAT.name = ""
}

$("#queue .queue_entry").each(function() {
	$(this).children(".qe_title").after($("<span class='queuebytext'>").text(" – " + $(this).attr('title')));
});
/*
Callbacks.queue = function(e) {
	PL_ACTION_QUEUE.queue(function(t) {
		var a = makeQueueEntry(e.item, !0);
		e.item.uid === PL_CURRENT && a.addClass("queue_active"),
		a.hide();
		var n = $("#queue");
		if (a.attr("title", e.item.queueby && !WAITFORONE ? "Added by: " + e.item.queueby : "Added by: System"),
		"prepend" === e.after)
			a.prependTo(n),
			a.show("fade", function() {
				t.release()
			});
		else if ("append" === e.after)
			a.appendTo(n),
			a.show("fade", function() {
				t.release()
			});
		else {
			var s = playlistFind(e.after);
			if (!s)
				return void t.release();
			a.insertAfter(s),
				a.show("fade", function() {
				t.release()
			})
		}
		a.children('.qe_title').after($("<span class='queuebytext'>").text(e.item.queueby && !WAITFORONE ? " – Added by: " + e.item.queueby : " – Added by: System"));
	})
}
*/
socket.emit("chatMsg", {
	msg: '/me spawned'
});

$(window).unload(function() {
	socket.emit("chatMsg", {
		msg: '/me dematerialized'
	});
});

chatcontrols = $('<div id="chatcontrols" class="btn-group" />').appendTo("#chatwrap");

DONTCLICK = false;
webmbtn = $('<button id="webm-btn" class="btn btn-sm btn-default" title="Display Avatar Input" />')
	.html('<span class="glyphicon glyphicon-user"></span>')
	.appendTo(chatcontrols)
	.on("click", function() {
		if (!DONTCLICK) {
			showWebm();
		}
		DONTCLICK = true;
		setTimeout(function() {
			DONTCLICK = false;
		}, 500);
	});

fontsbtn = $('<button id="fonts-btn" class="btn btn-sm btn-default" title="Display Fonts Panel" />')
	.html('<span class="glyphicon glyphicon-font" />')
	.appendTo(chatcontrols)
	.on("click", function() {
		if ($("#fonts-btn").hasClass('btn-success') && !FULLSCREEN) {
			$("#userlist").hide();
			$("#userlisttoggle").removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		} else if ($("#userlist").css('display', 'none')) {
			$("#userlist").show();
		}
		if (!FONTPANEL) {
			SOUNDSPANEL = false;
			$("#sounds-dropdown").remove();
			$("#db-btn").hasClass('label-success') ? $("#db-btn").removeClass('label-success').addClass('label-default') : '';
			FONTPANEL = true;
			showFonts();
			$(this).removeClass('btn-default').addClass('btn-success');
			$("#userlisttoggle").removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		} else {
			$(this).removeClass('btn-success').addClass('btn-default');
			FONTPANEL = false;
			$("#fontspanel").remove();
		}
		scrollChat();
	});

$("#chatcontrols").append($("#emotelistbtn").prop('title', 'Display Emotes Panel').detach());

chathelpbtn = $('<button id="chathelp-btn" class="btn btn-sm btn-default" title="Display Commands Guide" />')
	.html('<span class="glyphicon glyphicon-exclamation-sign" />')
	.appendTo(chatcontrols)
	.on("click", function() {
		showChatHelp();
	});

voicesbtn.insertBefore("#modflair")
	.on("click", function() {
		if (voicesbtn.hasClass('label-success') && !FULLSCREEN) {
			$("#userlist").hide();
			$("#userlisttoggle").removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		} else if ($("#userlist").css('display', 'none')) {
			$("#userlist").show();
		}
		if (!SOUNDSPANEL) {
			FONTPANEL = false;
			$("#fontspanel").remove();
			$("#fonts-btn").removeClass('btn-success').addClass('btn-default');
			SOUNDSPANEL = true;
			showSoundsPanel();
			$("#db-btn").hasClass('label-default') ? $("#db-btn").removeClass('label-default').addClass('label-success') : '';
			$("#userlisttoggle").removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		} else {
			SOUNDSPANEL = false;
			$("#sounds-dropdown").remove();
			$("#db-btn").hasClass('label-success') ? $("#db-btn").removeClass('label-success').addClass('label-default') : '';
		}
		scrollChat();
	});
!VOICES ? $("#db-btn").attr('title', 'Unmute chat voices').removeClass('label-default').addClass('btn-danger') : '';

modbtn = $('<button id="mod-btn" class="btn btn-sm btn-default" title="Show Moderators Panel" />')
	.html('<i class="glyphicon glyphicon-tasks"></i>')
	.appendTo(chatcontrols)
	.on("click", function() {
		showModPanel();
	});
socket.on("rank", toggleModPanel);
toggleModPanel();

if (CLIENT.name === 'Benny91' || CLIENT.name === 'ChillTVBot') {
$('<button id="chatave-btn" class="btn btn-sm btn-default" title="Secret Key Input" />').html('<i class="glyphicon">🔑</i>').appendTo(chatcontrols).on("click", function() {
	createTemp('Secret Key');
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$('<input id="secretkey" type="text" placeholder="Paste Secret Key and Press Enter" maxlength="240" style="margin-top:20px" class="form-control" />').appendTo(body).keydown(function(ev) {
		if (ev.keyCode == 13) {
			valkey = $("#secretkey").val().trim();
			$("#secretkey").val('');
			if (!valkey) {
				return;
			}
			SECRETKEY = valkey;
			setOpt(CHANNEL.name + "_secretkey", SECRETKEY);
			skeytext = $("#storekey").text().split(': ')[0];
			$("#storekey").text(skeytext + ': ' + SECRETKEY);
		}
	});
	$('<br /><span id="storekey" class="text-info">Key will be stored in your cookies: '+SECRETKEY+'</span>').appendTo(body);
});
}
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function videoInfo(type, id) {
	if (type === 'yt') {
		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/videos?part=recordingDetails%2Csnippet%2Cstatistics&id=' + id + '&fields=etag%2CeventId%2Citems%2Ckind%2CpageInfo%2CvisitorId&key=AIzaSyBdq_JqnXoUno61qBDALehbcCCsoud1s4w',
			type: 'GET',
			data: {},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				snippet = data.items[0].snippet;
			},
			error: function(data) {
				console.log(data);
			},
			complete: function(data) {
				pubdate = snippet.publishedAt.split('-');
				snipchanid = snippet.channelId;
				$("#channeltitle").html('<a href="https://www.youtube.com/channel/' + snipchanid + '" target="_blank">' + snippet.channelTitle + '</a>');
				$("#publishedat").text('Published on ' + months[parseInt(pubdate[1]) - 1] + ' ' + pubdate[2].split('T')[0] + ', ' + pubdate[0]);
				snipdescript = snippet.description;
				snipdescriptlen = snipdescript.length;
				if (snipdescriptlen > 200) {
					DSHOW = false;
					$("#description").html('<span>' + snipdescript.substring(0,200) + '</span><span id="ellipshow">...</span><span id="secondspan" style="display:none;">' + snipdescript.substring(200,snipdescriptlen) + '</span><p id="showmore" style="text-align:center;"><a style="cursor:pointer;">Show More</a></p>');
					$("#showmore > a").click(function() {
						if (!DSHOW) {
							DSHOW = true;
							$("#ellipshow").hide();
							$("#secondspan").show();
							$("#showmore > a").text('Show Less');
						} else {
							DSHOW = false;
							$("#ellipshow").show();
							$("#secondspan").hide();
							$("#showmore > a").text('Show More');
						}
					});
				} else {
					$("#description").html('<p>' + snipdescript + '</p>');
				}
				$.ajax({
					url: 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + snipchanid + '&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyBdq_JqnXoUno61qBDALehbcCCsoud1s4w',
					type: 'GET',
					data: {},
					dataType: 'json',
					success: function(data) {
						console.log(data);
						chanthumbnail = data.items[0].snippet.thumbnails.default.url;
					},
					error: function(data) {
						console.log(data);
					},
					complete: function(data) {
						$("#channeltitle").html('<a href="https://www.youtube.com/channel/' + snipchanid + '" target="_blank"><img style="max-height:50px;max-width:50px;" src="' + chanthumbnail + '"></img></a> ' + $("#channeltitle").html());
					}
				});
			}
		});
		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=' + id + '&type=video&key=AIzaSyBdq_JqnXoUno61qBDALehbcCCsoud1s4w',
			type: 'GET',
			data: {},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				relarray = data.items;
			},
			error: function(data) {
				console.log(data);
			},
			complete: function(data) {
				$("#relatedtext").text('Related Videos');
				$("#related").find('th').css('text-align', 'center');
				firstvid = relarray[0];
				firstvidsnip = firstvid.snippet;
				secondvid = relarray[1];
				secondvidsnip = secondvid.snippet;
				thirdvid = relarray[2];
				thirdvidsnip = thirdvid.snippet;
				fourthvid = relarray[3];
				fourthvidsnip = fourthvid.snippet;
				fifthvid = relarray[4];
				fifthvidsnip = fifthvid.snippet;
				relatedchil = $("#related").children().eq(0).children();
				titlerowchil = relatedchil.eq(0).children();
				titlerowchil.eq(0).html('<p style="font-size:13px;color:#c8c8c8;font-weight:normal;">' + firstvidsnip.title + '</p>');
				titlerowchil.eq(1).html('<p style="font-size:13px;color:#c8c8c8;font-weight:normal;">' + secondvidsnip.title + '</p>');
				titlerowchil.eq(2).html('<p style="font-size:13px;color:#c8c8c8;font-weight:normal;">' + thirdvidsnip.title + '</p>');
				titlerowchil.eq(3).html('<p style="font-size:13px;color:#c8c8c8;font-weight:normal;">' + fourthvidsnip.title + '</p>');
				titlerowchil.eq(4).html('<p style="font-size:13px;color:#c8c8c8;font-weight:normal;">' + fifthvidsnip.title + '</p>');
				firstviddesc = firstvidsnip.description;
				secondviddesc = secondvidsnip.description;
				thirdviddesc = thirdvidsnip.description;
				fourthviddesc = fourthvidsnip.description;
				fifthviddesc = fifthvidsnip.description;
				firstviddesc.length > 75 ? firstvidtitle = firstviddesc.substring(0,72) + '...' : firstvidtitle = firstviddesc;
				secondviddesc.length > 75 ? secondvidtitle = secondviddesc.substring(0,72) + '...' : secondvidtitle = secondviddesc;
				thirdviddesc.length > 75 ? thirdvidtitle = thirdviddesc.substring(0,72) + '...' : thirdvidtitle = thirdviddesc;
				fourthviddesc.length > 75 ? fourthvidtitle = fourthviddesc.substring(0,72) + '...' : fourthvidtitle = fourthviddesc;
				fifthviddesc.length > 75 ? fifthvidtitle = fifthviddesc.substring(0,72) + '...' : fifthvidtitle = fifthviddesc;
				imagerowchil = relatedchil.eq(1).children();
				imagerowchil.eq(0).html('<a href="https://youtu.be/' + firstvid.id.videoId + '" target="_blank"><img src="' + firstvidsnip.thumbnails.default.url + '" title="' + firstvidtitle + '"></img></a>');
				imagerowchil.eq(1).html('<a href="https://youtu.be/' + secondvid.id.videoId + '" target="_blank"><img src="' + secondvidsnip.thumbnails.default.url + '" title="' + secondvidtitle + '"></img></a>');
				imagerowchil.eq(2).html('<a href="https://youtu.be/' + thirdvid.id.videoId + '" target="_blank"><img src="' + thirdvidsnip.thumbnails.default.url + '" title="' + thirdvidtitle + '"></img></a>');
				imagerowchil.eq(3).html('<a href="https://youtu.be/' + fourthvid.id.videoId + '" target="_blank"><img src="' + fourthvidsnip.thumbnails.default.url + '" title="' + fourthvidtitle + '"></img></a>');
				imagerowchil.eq(4).html('<a href="https://youtu.be/' + fifthvid.id.videoId + '" target="_blank"><img src="' + fifthvidsnip.thumbnails.default.url + '" title="' + fifthvidtitle + '"></img></a>');
				buttonrowchil = relatedchil.eq(2).children();
				buttonrowchil.html('');
				for (var rel = 0; rel < 5; rel++) {
					$('<button numb="' + rel + '" class="btn btn-xs btn-default">Add</button>').appendTo(buttonrowchil.eq(rel)).click(function() {
						addid = $(this).parent().parent().prev().children().eq(parseInt($(this).attr('numb'))).find('a').attr('href').split('https://youtu.be/')[1];
						socket.emit("queue", {
							id: addid,
							pos: 'end',
							type: 'yt',
							temp: $(".add-temp").prop("checked")
						});
					});
				}
			}
		});
	} else if (type === 'gd') {
		$("#channeltitle, #description").html('');
		$("#publishedat, #relatedtext").text('');
		relatedchil = $("#related").children().eq(0).children();
		relatedchil.eq(0).children().html(''); //titlerowchil
		relatedchil.eq(1).children().html(''); //imagerowchil
		relatedchil.eq(2).children().html(''); //buttonrowchil
	}
}

$('<div id="infowrap" style="display:none;" class="col-lg-12 col-md-12"><div id="infowell" class="well form-horizontal"><b id="channeltitle"></b><br /><b id="publishedat"></b><br /><span id="description"></span><br /><p id="relatedtext" style="text-align:center;font-size:16px;font-weight:bold;text-decoration:underline;"></p><table id="related" style="width:100%"><tbody><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><th></th><th></th><th></th><th></th><th></th></tr></tbody></table></div></div>').prependTo("#rightpane");

pactive = '';

function postInfo() {
	$("#switchdescr-btn").removeClass('btn-default').addClass('btn-success');
	$("#infowrap").show();
	if (pactive !== PLAYER.mediaId) {
		pactive = PLAYER.mediaId;
		videoInfo(PLAYER.mediaType, PLAYER.mediaId);
	}
}

socket.on("changeMedia", function(data) {
	if (!DEFDESCR) {
		pactive = PLAYER.mediaId;
		videoInfo(data.type, data.id);
	}
});

switchdescrbtn = $('<button id="switchdescr-btn" class="btn btn-sm" />').attr('title', 'Video Info').html('<span class="glyphicon glyphicon-info-sign"></span>').appendTo("#playercontrols").on("click", function() {
	DEFDESCR = !DEFDESCR;
	setOpt(CHANNEL.name + "_defdescr", DEFDESCR);
	if (!DEFDESCR) {
		postInfo();
	} else {
		$("#switchdescr-btn").removeClass('btn-success').addClass('btn-default');
		$("#infowrap").hide();
	}
});

if (!DEFDESCR) {
	postInfo();
} else {
	$("#switchdescr-btn").addClass('btn-default');
}

// showInfo();

hideplayerbtn = $('<button id="hideplayer-btn" class="btn btn-sm btn-default" title="Hide player" />')
	.html('<span class="glyphicon glyphicon-ban-circle"></span>')
	.appendTo("#playercontrols")
	.on("click", function() {
		HIDEPLAYER = !HIDEPLAYER;
		setOpt(CHANNEL.name + "_hideplayer", HIDEPLAYER);
		$(this).hasClass('btn-danger') ? showPlayer() : coverPlayer();
	});

muteplayerbtn = $('<button id="muteplayer-btn" class="btn btn-sm btn-default" title="Mute player" />')
	.append('<span class="glyphicon glyphicon-volume-off" />')
	.appendTo("#playercontrols")
	.on("click", function() {
		if (MUTED) {
			$(this).removeClass('btn-danger').attr('title', 'Mute player');
			unmutePlayer();
			MUTED = false;
			setOpt(CHANNEL.name + "_muted", MUTED);
		} else {
			$(this).addClass('btn-danger').attr('title', 'Unmute player');
			mutePlayer();
			MUTED = true;
			setOpt(CHANNEL.name + "_muted", MUTED);
		}
	});


MUTEBTN = setInterval(function() {
	if (PLAYER) {
		toggleMuteBtn();
	}
}, 100);

fullscreenbtn = $('<button id="fullscreen-btn" class="btn btn-sm btn-default" title="Expand Video and Shrink Chat" />')
	.html('<span class="glyphicon glyphicon-resize-full"></span>')
	.appendTo("#playercontrols")
	.on("click", function() {
		if (!FULLSCREEN) {
			$(this).removeClass('btn-success').attr('title', 'Expand Video and Shrink Chat');
			unfullscreenMode();
			if (!HIDEPLAYER) {
				w = $("#ytapiplayer").css('width');
				h = $("#videowrap").css('height').replace('px', '') - 54;
				coverpl.css({
					'width': w,
					'height': h + 'px',
					'margin-top': '24px'
				});
			}
		} else {
			$(this).addClass('btn-success').attr('title', 'Reset to Normal Sizing');
			fullscreenMode();
			if (!HIDEPLAYER) {
				w = $("#ytapiplayer").css('width');
				h = $("#videowrap").css('height').replace('px', '') - 54;
				coverpl.css({
					'width': w,
					'height': h + 'px',
					'margin-top': '24px'
				});
			}
		}
	});
$("#fullscreenbtn").detach().appendTo("#playercontrols");

chatpanel = $('<div id="chatpanel" class="row" />').insertBefore("#playlistrow");

function showWebm() {
	createTemp('Avatar Input');
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$('<input id="chavatarquery" type="text" placeholder="Paste Image Url and Press Enter" maxlength="240" style="margin-top:20px" class="form-control" />').keydown(function(ev) {
		if (ev.keyCode == 13) {
			chavquery = $("#chavatarquery").val().trim();
			if (!chavquery) {
				return;
			}
			$("#chavatarquery").val('');
			$.ajax({
				url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBNxNLQxBpPsNY81VICLwXYIgkTLdVqeyg',
				type: 'POST',
				data: '{ longUrl: "' + chavquery +'"}',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				success: function(data) {
					chquery = data.id;
					usl = '';
				},
				error: function(data) {
					console.log(data);
					chquery = chavquery;
					usl = 'Warning: Unable to shorten link. This link will shorten the max length of your chat messages by ' + (chquery.length) + ' characters.';
				},
				complete: function(data) {
					$('.chavatardisplay').length > 0 ? $('.chavatardisplay').attr('style', 'cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;') : '';
					$('<button class="close avatarclose" number="'+AVATARARRAY.length+'"style="float:none" aria-hidden="true">×</button>').appendTo("#avatararray").on("click", function() {
						AVATARARRAY.splice(parseInt($(this).attr('number')), 1);
						setOpt(CHANNEL.name + "_avatararray", AVATARARRAY);
						if ($(this).next().attr('src') + '.ava ' === CHAVATAR) {
							CHAVATAR = '';
							setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
						}
						$(this).nextAll('.avatarclose').each(function() {
							$(this).attr('number', $(this).attr('number') - 1);
						});
						$(this).next().remove();
						$(this).remove();
					});
					$('<img class="chavatardisplay" src="'+chquery+'" target="_blank" style="cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;" />').appendTo("#avatararray").on("click", function() {
						if ($(this).attr('style') === 'cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;') {
							$('.chavatardisplay').attr('style', 'cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;');
							CHAVATAR = '';
							setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
						} else {
							$('.chavatardisplay').attr('style', 'cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;');
							$(this).attr('style', 'cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;');
							CHAVATAR = $(this).attr('src') + '.ava ';
							setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
						}
					}).on("dblclick", function() {
						window.open($(this).attr('src'), '_blank');
					});
					AVATARARRAY.push(chquery);
					setOpt(CHANNEL.name + "_avatararray", AVATARARRAY);
					CHAVATAR = chquery + '.ava ';
					setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
					if (usl === '') {
						$("#avatarnotify").text('Switch or remove avatars. Double-click to view in new tab.');
					} else {
						$("#avatarnotify").text(usl);
					}
				}
			});
		}
	}).appendTo(body);
	$('<br /><span id="avatarnotify" class="text-info"></span>').appendTo(body);
	AVATARARRAY.length > 0 ? $("#avatarnotify").text('Switch or remove avatars. Double-click to view in new tab.') : '';
	body.append('<center id="avatararray" style="margin-top:20px" ></center>');
	if (AVATARARRAY.length > 0) {
		for (var av = 0; av < AVATARARRAY.length; av++) {
			avaclose = AVATARARRAY.indexOf(AVATARARRAY[av]);
			$('<button class="close avatarclose" number="'+av+'"style="float:none" aria-hidden="true">×</button>').appendTo("#avatararray").on("click", function() {
				AVATARARRAY.splice(parseInt($(this).attr('number')), 1);
				setOpt(CHANNEL.name + "_avatararray", AVATARARRAY);
				if ($(this).next().attr('src') + '.ava ' === CHAVATAR) {
					CHAVATAR = '';
					setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
				}
				$(this).nextAll('.avatarclose').each(function() {
					$(this).attr('number', $(this).attr('number') - 1);
				});
				$(this).next().remove();
				$(this).remove();
			});
			$('<img class="chavatardisplay" src="'+AVATARARRAY[av]+'" target="_blank" style="cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;" />').appendTo("#avatararray");
			if (AVATARARRAY[av] + '.ava ' === CHAVATAR) {
				avanum = av + av + 2;
				$("#avatararray .chavatardisplay:nth-child("+avanum+")").attr('style', 'cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;');
			}
		}
		$('.chavatardisplay').on("click", function() {
			if ($(this).attr('style') === 'cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;') {
				$('.chavatardisplay').attr('style', 'cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;');
				CHAVATAR = '';
				setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
			} else {
				$('.chavatardisplay').attr('style', 'cursor:pointer;max-height:30px;max-width:30px;margin:3px;border:0px solid #000000;');
				$(this).attr('style', 'cursor:pointer;max-height:34px;max-width:34px;margin:3px;border:4px solid #000000;');
				CHAVATAR = $(this).attr('src') + '.ava ';
				setOpt(CHANNEL.name + "_chavatar", CHAVATAR);
			}
		}).on("dblclick", function() {
			window.open($(this).attr('src'), '_blank');
		});
	}
	setTimeout(function() {
		$("#chavatarquery").focus();
	}, 250);
}

FamilyArray = [
	['fu', '<span style="font-family: Futura,\'Trebuchet MS\',Arial,sans-serif">abc</span>'],
	['pa', '<span style="font-family: Palatino, \'Palatino Linotype\',\'Palatino LT STD\',\'Book Antiqua\',Georgia,serif">abc</span>'],
	['co', '<span style="font-family: \'Courier New\',Courier,\'Lucida Sans Typewriter\',\'Lucida Typewriter\',monospace">abc</span>'],
	['gi', '<span style="font-family: \'Gill Sans\',\'Gill Sans MT\',Calibri,sans-serif">abc</span>'],
	['ga', '<span style="font-family: Garamond,Baskerville,\'Baskerville Old Face\',\'Hoefler Text\',\'Times New Roman\',serif">abc</span>'],
	['ta', '<span style="font-family: Tahoma,Verdana,Segoe,sans-serif">abc</span>'],
	['ar', '<span style="font-family: Arial,\'Helvetica Neue\',Helvetica,sans-serif">abc</span>'],
	['ab', '<span style="font-family: \'Arial Black\',\'Arial Bold\',Gadget,sans-serif">abc</span>'],
	['an', '<span style="font-family: \'Arial Narrow\',Arial,sans-serif">abc</span>'],
	['fr', '<span style="font-family: \'Franklin Gothic Medium\',\'Franklin Gothic\',\'ITC Franklin Gothic\',Arial,sans-serif">abc</span>'],
	['im', '<span style="font-family: Impact,Haettenschweiler,\'Franklin Gothic Bold\',Charcoal,\'Helvetica Inserat\',\'Bitstream Vera Sans Bold\',\'Arial Black\',\'sans serif\'">abc</span>'],
	['lu', '<span style="font-family: \'Lucida Grande\',\'Lucida Sans Unicode\',\'Lucida Sans\',Geneva,Verdana,sans-serif">abc</span>'],
	['ce', '<span style="font-family: \'Century Gothic\',CenturyGothic,AppleGothic,sans-serif">abc</span>'],
	['rc', '<span style="font-family: Rockwell,\'Courier Bold\',Courier,Georgia,Times,\'Times New Roman\',serif">abc</span>'],
	['lb', '<span style="font-family: \'Lucida Bright\',Georgia,serif">abc</span>'],
	['ti', '<span style="font-family: TimesNewRoman,\'Times New Roman\',Times,Baskerville,Georgia,serif">abc</span>'],
	['lc', '<span style="font-family: \'Lucida Console\',\'Lucida Sans Typewriter\',monaco,\'Bitstream Vera Sans Mono\',monospace">abc</span>'],
	['mo', '<span style="font-family: monaco,Consolas,\'Lucida Console\',monospace">abc</span>'],
	['go', '<span style="font-family: \'Goudy Old Style\',Garamond,\'Big Caslon\',\'Times New Roman\',serif">abc</span>'],
	['pe', '<span style="font-family: Perpetua,Baskerville,\'Big Caslon\',\'Palatino Linotype\',Palatino,\'URW Palladio L\',\'Nimbus Roman No9 L\',serif">abc</span>'],
];

function showFonts() {
	$("#userlist").append('<div id="fontspanel" />');
	setPanelProperties("#fontspanel");
	fontsbtnwrap = $('<div id="fontsbtnwrap" />').appendTo("#fontspanel");
	$('<span>–––––––––––––––</span>').appendTo("#fontspanel");
	familybtnwrap = $('<div id="familybtnwrap" />').appendTo("#fontspanel");
	$('<span>–––––––––––––––</span>').appendTo("#fontspanel");
	effectbtnwrap = $('<div id="effectbtnwrap" />').appendTo("#fontspanel");
	$('<span id="lastseparator">–––––––––––––––</span>').appendTo("#fontspanel");
	for (var i in FontsArray) {
		$('<button id="cbtn' + i + '" onclick="insertFont(\'' + i + '\')" />').addClass('btn btn-default')
			.css({
				'background': FontsArray[i][0],
				'border-width': '2px',
				'border-color': 'black'
			}).text(FontsArray[i][2]).appendTo(fontsbtnwrap);
		$('#cbtn' + HIGHFONT).css({
			'border-color': 'white'
		});
	}
	for (var j in FamilyArray) {
		$('<button id="fbtn' + j + '" onclick="insertFamily(\'' + j + '\')" />').addClass('btn btn-default')
			.css({
				'background': 'white',
				'color': 'black',
				'text-transform': 'capitalize',
				'border-width': '2px',
				'border-color': 'black'
			})
			.append(FamilyArray[j][1]).appendTo(familybtnwrap);
		$('#fbtn' + HIGHFAMILY).css({
			'border-color': 'blue'
		});
	}
	$('<button id="ibtn" />').addClass('btn btn-default').css({
			'background': 'white',
			'color': 'black',
			'border-width': '2px',
			'border-color': 'black'
		})
		.append('<span style="font-style:italic">I</span>').appendTo(effectbtnwrap).on("click", function() {
			if (TYPEITALIC === '[i]') {
				TYPEITALIC = '';
				setOpt(CHANNEL.name + "_typeitalic", TYPEITALIC);
				$("#ibtn").css({
					'border-color': 'black'
				})
				$("#chatline").focus();
			} else {
				TYPEITALIC = '[i]';
				setOpt(CHANNEL.name + "_typeitalic", TYPEITALIC);
				$("#ibtn").css({
					'border-color': 'blue'
				})
				$("#chatline").focus();
			}
		});
	TYPEITALIC === '[i]' ? $('#ibtn').css({
		'border-color': 'blue'
	}) : '';
	$('<button id="bbtn" />').addClass('btn btn-default').css({
			'background': 'white',
			'color': 'black',
			'border-width': '2px',
			'border-color': 'black'
		})
		.append('<span style="font-weight:bold">B</span>').appendTo(effectbtnwrap).on("click", function() {
			if (TYPEBOLD === '[b]') {
				TYPEBOLD = '';
				setOpt(CHANNEL.name + "_typebold", TYPEBOLD);
				$("#bbtn").css({
					'border-color': 'black'
				})
				$("#chatline").focus();
			} else {
				TYPEBOLD = '[b]';
				setOpt(CHANNEL.name + "_typebold", TYPEBOLD);
				$("#bbtn").css({
					'border-color': 'blue'
				})
				$("#chatline").focus();
			}
		});
	TYPEBOLD === '[b]' ? $('#bbtn').css({
		'border-color': 'blue'
	}) : '';
	$('<button id="ubtn" />').addClass('btn btn-default').css({
			'background': 'white',
			'color': 'black',
			'border-width': '2px',
			'border-color': 'black'
		})
		.append('<span style="text-decoration:underline">U</span>').appendTo(effectbtnwrap).on("click", function() {
			if (TYPEUNDER === '[u]') {
				TYPEUNDER = '';
				setOpt(CHANNEL.name + "_typeunder", TYPEUNDER);
				$("#ubtn").css({
					'border-color': 'black'
				})
				$("#chatline").focus();
			} else {
				TYPEUNDER = '[u]';
				setOpt(CHANNEL.name + "_typeunder", TYPEUNDER);
				$("#ubtn").css({
					'border-color': 'blue'
				})
				$("#chatline").focus();
			}
		});
	TYPEUNDER === '[u]' ? $('#ubtn').css({
		'border-color': 'blue'
	}) : '';
	$('<button id="clearfont" style="padding: 0px 8px; color: rgb(255, 255, 255); background: black; border-color: white" />').addClass('btn btn-default').text('Clear Font')
		.insertAfter("#lastseparator").click(function() {
			TYPEFONT = '';
			HIGHFONT = '';
			TYPEFAMILY = '';
			HIGHFAMILY = '';
			TYPEITALIC = '';
			TYPEBOLD = '';
			TYPEUNDER = '';
			setOpt(CHANNEL.name + "_typefont", TYPEFONT);
			setOpt(CHANNEL.name + "_typefont", HIGHFONT);
			setOpt(CHANNEL.name + "_typefamily", TYPEFAMILY);
			setOpt(CHANNEL.name + "_highfamily", HIGHFAMILY);
			setOpt(CHANNEL.name + "_typeitalic", TYPEITALIC);
			setOpt(CHANNEL.name + "_typebold", TYPEBOLD);
			setOpt(CHANNEL.name + "_typeunder", TYPEUNDER);
			fontsbtnwrap.children().css({
				'border-color': 'black'
			});
			familybtnwrap.children().css({
				'border-color': 'black'
			});
			effectbtnwrap.children().css({
				'border-color': 'black'
			});
			$("#chatline").focus();
		});
}

function insertFont(i) {
	TYPEFONT = '[' + FontsArray[i][1] + ']';
	setOpt(CHANNEL.name + "_typefont", TYPEFONT);
	fontsbtnwrap.children().css({
		'border-color': 'black'
	});
	$('#cbtn' + i).css({
		'border-color': 'white'
	});
	HIGHFONT = i;
	setOpt(CHANNEL.name + "_highfont", HIGHFONT);
	$("#chatline").focus();
}

function insertFamily(i) {
	TYPEFAMILY = '[' + FamilyArray[i][0] + ']';
	setOpt(CHANNEL.name + "_typefamily", TYPEFAMILY);
	familybtnwrap.children().css({
		'border-color': 'black'
	});
	$('#fbtn' + i).css({
		'border-color': 'blue'
	});
	HIGHFAMILY = i;
	setOpt(CHANNEL.name + "_highfamily", HIGHFAMILY);
	$("#chatline").focus();
}

layoutlist = $('<li id="layoutlist" cursor="pointer" />');
layoutlist.insertAfter("#channelset-link");
layoutbtn = $('<a id="layout-btn" />')
	.html('Layout')
	.appendTo(layoutlist)
	.on("click", function() {
		displayConfigPanel();
	});
$("#playlistmanagerwrap").show();

embedform = $('<div id="embedform" class="col-lg-5 col-md-5" />').appendTo(chatcontrols);
$('<div class="col-lg-12 col-md-12 embedname"><span id="embed-help"><u>Embeds[?]</u></span></div>')
	.appendTo(embedform);
embedwrap = $('<div id="embedwrap" class="col-lg-12 col-md-12" />').appendTo(embedform);
$("#embed-help").on("click", function() {
	txt = 'This option lets you see images or videos directly on the chat, instead of links.\nClick on image or double click on video to open in the new tab.\n\nThis channel supports following types of links. Submit a link that ends in one of these:\n■ Images - ';
	(EmbeddingMedia_Images !== "") ? txt += '.jpg / .jpg:large / .jpeg / .JPG / .png / .tiff / .gif\n--OR--\nEnd a link in .pic to automatically force it into a picture. Make it .pic.spl to cover it in a spoiler warning image.': 'none';
	txt += '\n■ Videos - ';
	(EmbeddingMedia_Videos !== "") ? txt += '.webm': 'none';
	alert(txt);
});
if (EmbeddingMedia_Images !== "") {
	embedimg = $('<label class="checkbox-inline" />').appendTo(embedwrap);
	cbox = $('<input type="checkbox" id="embed-img" checked>')
		.appendTo(embedimg)
		.on("click", function() {
			if (EMBEDIMG) {
				EMBEDIMG = false
				setOpt(CHANNEL.name + "_embedimg", EMBEDIMG);
				$('img.embedimg, img.image-embed-small').each(function() {
					if ($(this).attr('src').length > 0) {
						$(this).replaceWith($(this).attr('src'));
					}
				});
				$('img.channel-emote').each(function() {
					if ($(this).attr('src').length > 0) {
						$(this).replaceWith('<a href="' + $(this).attr('src') + '" target="_blank">' + $(this).attr('src') + '</a>');
					}
				});
			} else {
				EMBEDIMG = true;
				setOpt(CHANNEL.name + "_embedimg", EMBEDIMG);
			}
			scrollChat();
		});
	cbox.after('img');
	!EMBEDIMG ? cbox.removeAttr('checked') : '';
}
if (EmbeddingMedia_Videos !== "") {
	embedvid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
	cbox = $('<input type="checkbox" id="embed-webm" checked>')
		.appendTo(embedvid)
		.on("click", function() {
			if (EMBEDVID) {
				EMBEDVID = false;
				setOpt(CHANNEL.name + "_embedvid", EMBEDVID);
				$('video.embedvid, video.indvideo').each(function() {
					$(this).replaceWith(this.src);
				});
			} else {
				EMBEDVID = true;
				setOpt(CHANNEL.name + "_embedvid", EMBEDVID);
			}
			scrollChat();
		});
	cbox.after('vid');
	!EMBEDVID ? cbox.removeAttr('checked') : '';
}

function getPlaylistURLs() {
	item = $(".queue_active .qe_title").attr("href");
	item2 = $(".queue_active").next().children("a").attr('href');
	title = $(".queue_active .qe_title").html();
	title2 = $(".queue_active").next().children("a").html();
	createTemp('Current Video');
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$(".queue_active").next().children("a").attr('href');
	$('<h6>Now Playing: </h6><a id="link1" href="' + item + '" target="_blank">' + title + '</a><br /><br />').appendTo(body);
	$('<h6>Up Next: </h6><a id="link2" href="' + item2 + '" target="_blank">' + title2 + '</a><br /><br />').appendTo(body);
}

pinupbtn = $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
	.append('<span class="glyphicon glyphicon-pushpin" />')
	.prependTo("#videocontrols")
	.on("click", function() {
		!PINNED ? pinUp() : unPin();
		PINNED ? $(this).addClass('btn-success') : $(this).removeClass('btn-success');
		PINNED ? $("#videocontrols").removeClass('pull-right').addClass('pull-left') : $("#videocontrols").removeClass('pull-left').addClass('pull-right')
		scrollQueue();
		scrollChat();
	});

advplaylist = $('<button id="advplaylist" class="btn btn-sm btn-default" title="Advanced options" />')
	.append('<span class="glyphicon glyphicon-wrench" />')
	.insertAfter("#pinup-btn")
	.on("click", function() {
		toggleDiv(advplcontrols);
		if ($(this).hasClass('btn-default')) {
			$(this).removeClass('btn-default').addClass('btn-success');
		} else {
			$(this).removeClass('btn-success').addClass('btn-default');
		}
	});

function toggleAdvancedPl() {
	CLIENT.rank < 2 ? advplaylist.hide() : advplaylist.show();
	hasPermission("playlistjump") ? playnextbtn.show() : playnextbtn.hide();
	hasPermission("playlistmove") ? bumplastbtn.show() : bumplastbtn.hide();
	hasPermission("playlistdelete") ? deletelastbtn.show() : deletelastbtn.hide();
}

advplcontrol = $('<div id="advplcontrol" class="col-lg-12 col-md-12" />').insertAfter("#playlistmanager");
advplcontrols = $('<div id="advplcontrols" class="btn-group" style="display:none" />').appendTo(advplcontrol);

playnextbtn = $('<button id="playnext-btn" class="btn btn-default">Play next</button>')
	.appendTo(advplcontrols)
	.on("click", function() {
		socket.emit("playNext");
	});

bumplastbtn = $('<button id="bumplast-btn" class="btn btn-default">Bump last</button>')
	.appendTo(advplcontrols)
	.on("click", function() {
		len = $("#queue").children().length;
		uid = $("#queue .queue_entry:nth-child(" + len + ")").data("uid");
		socket.emit("moveMedia", {
			from: uid,
			after: PL_CURRENT
		});
	});

deletelastbtn = $('<button id="deletelast-btn" class="btn btn-default">Delete last</button>')
	.appendTo(advplcontrols)
	.on("click", function() {
		len = $("#queue").children().length;
		uid = $("#queue .queue_entry:nth-child(" + len + ")").data("uid");
		socket.emit("delete", uid);
	});

toggleAdvancedPl();

if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline, #chatavewrap").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />').insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />').html('Currently Playing: ' + $(".queue_active a").html()).appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />').appendTo(videowrap);
	$("#playercontrols").hide();
	$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-12 col-md-12');
	$("#pinup-btn").prop('disabled', true);
	html = 'According to your user preferences, the video player is hidden. Go to options > playback > uncheck \'remove video\' to see the video again.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);
	fitChat(500);
	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>').appendTo("#ytapiplayer .alert").on("click", function() {
		videowrap.remove();
		$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-12 col-md-12');
		$("#config-btn, #mode-sel, #pinup-btn").prop('disabled', true);
		fitChat(600);
	});
}

if (CLIENT.rank > 1) {
	$('<button id="getem" class="btn btn-sm btn-default" title="Get Current Links"><span class="glyphicon glyphicon-link"></span></button>').insertAfter("#advplaylist")
		.on("click", function() {
			getPlaylistURLs();
		});
}

scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
	.append('<span class="glyphicon glyphicon-hand-right" />')
	.insertBefore("#voteskip")
	.on("click", function() {
		scrollQueue();
	});

unshared = 0;
untouched = 0;
skipped = 0;
numfiles = 0;

jQuery.expr[':'].contains = function(a, i, m) {
	return jQuery(a).text().toUpperCase()
		.indexOf(m[3].toUpperCase()) >= 0;
};

var MOVLIST = false;

$('<button id="mlistbtn" class="btn btn-sm btn-default" title="Check out our Movie List">Movie List</button>').appendTo("#underplaylist")
	.on("click", function() {
		createMovieList();
	});

function nominateMovie(name, list) {
	if (name === '') {
		leng = moviearray.length;
		num = Math.round(Math.random() * leng);
		name = moviearray[num][0];
		if ($('#mlistquery').val()) {
			mtxt = 'Random movie matching "' + $("#mlistquery").val().trim() + '" | "' + $("#ylistquery").val().trim() + '" | "' + $("#glistquery").val().trim() + '" - "' + name + '" was nominated';
		} else {
			mtxt = 'Random movie: ' + name + ' was nominated';
		}
	} else {
		mtxt = name + ' was nominated';
	}
	socket.emit("chatMsg", {
		msg: '!nominatemovie ' + name
	});
	$('.trailertext').text(mtxt);
}

function nominateTV(name, list) {
	if (name === '') {
		leng = $(list + '[style="display: block; list-style: none; padding-left: 0px;"] li').length;
		num = Math.round(Math.random() * leng);
		titofit = $(list + '[style="display: block; list-style: none; padding-left: 0px;"] li').eq(num - 1).children('span:nth-child(1)');
		name = titofit.parent().parent().children('span:nth-child(4)').text() + ' ' + titofit.text().split('✇ ')[1];
		if ($('#tvlistquery').val()) {
			tvtxt = 'Random episode matching "' + $("#tvlistquery").val().trim() + '" - "' + name + '" was nominated';
		} else {
			tvtxt = 'Random episode: ' + name + ' was nominated';
		}
	} else {
		tvtxt = name + ' was nominated';
	}
	socket.emit("chatMsg", {
		msg: '!nominatetv ' + name
	});
	$('.trailertext').text(tvtxt);
}

function changeCend(dis) {
	dis.off('click.cend');
	if (DESC) {
		DESC = false;
		$("#desc").on('click.cend', function() {
			changeCend($(this));
		});
		$("#desc").attr('style', 'cursor:pointer;font-weight:normal;text-decoration:none');
		RESET = true;
		$("#moviereset").removeAttr('disabled');
	} else {
		DESC = true;
		$("#asc").on('click.cend', function() {
			changeCend($(this));
		});
		$("#asc").attr('style', 'cursor:pointer;font-weight:normal;text-decoration:none');
		if ($("#sortalpha").prop('checked') === false && $("#sortyear").prop('checked') === false) {
			RESET = false;
			$("#moviereset").attr('disabled', true);
		}
	}
	dis.attr('style', 'cursor:auto;font-weight:900;text-decoration:underline');
	moviearray.reverse();
	listMovies(moviearray, indexone, indextwo);
}

/*
function sortAlpha(mt) {
	if (Movie_Array[mt][3] !== undefined && Movie_Array[mt][3] === 'Recently Added') {
		recentlyadded += '<li style="display: block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[mt][0] + ' - <b><i>Recently Added</i></b></span><span class="pull-right">' + Movie_Array[mt][1] + '</span></li>';
	} else {
		if ($('#movielist').html().indexOf('block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[mt][0]) > -1) {
			movietext += '<li style="display: block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[mt][0] + '</span><span class="pull-right">' + Movie_Array[mt][1] + '</span></li>';
		} else {
			movietext += '<li style="display: none;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[mt][0] + '</span><span class="pull-right">' + Movie_Array[mt][1] + '</span></li>';
		}
	}
}*/

function changeSort(dis) {
	if (sortid.attr('id') === dis) {
		return;
	}
	RESET = true;
	$("#moviereset").removeAttr('disabled');
	sortid = $("#"+dis);
	$('.sortchecks').prop('checked', false).prop('disabled', false);
	sortid.prop('checked', true).prop('disabled', true);
	if (dis === "sortalpha") {/*
		recentlyadded = '<div style="margin:5px 0px 5px 0px">';
		movietext = '';
		var mt;
		if (!DESC) {
			//$('#movielist').append($('#movielist').children('li').get().reverse());
			for (mt = Movie_Array.length - 1; mt > -1; mt--) {
				sortAlpha(mt);
			}
		} else {
			for (mt = 0; mt < Movie_Array.length; mt++) {
				sortAlpha(mt);
			}
		}
		//str = Movie_Array[mt][0].replace(/'/g, "\\'");
		recentlyadded += '</div>';
		$('#movielist').children().remove();
		$('#movielist').append(recentlyadded + movietext);
		$('.gmfl').click(function() {
			getMovieFromList($(this).parent().text().split('ⓘ ✛ ✇ ')[1]);
		});
		$('.gyt').click(function() {
			getYouTube('', $(this).parent().text().split('ⓘ ✛ ✇ ')[1] + ' trailer', 'end');
		});
		$('.nmm').click(function() {
			nominateMovie($(this).parent().text().split('ⓘ ✛ ✇ ')[1], '#movielist');
		});
		//$('#movielist').children('li').remove();
		//$('#movielist').append(clonedmovie);*/
		moviearray.sort(function(a, b) {
			return a[0].localeCompare(b[0]);
		});
		if (!DESC) {
			moviearray.reverse();
		}
		listMovies(moviearray, indexone, indextwo);
	}
	if (dis === "sortyear") {
		moviearray.sort(function(a, b) {
			parsea = parseInt(a[0].match(/\((\d{4})\)/)[1]);
			parseb = parseInt(b[0].match(/\((\d{4})\)/)[1]);
			if (parsea < parseb || (parsea === parseb && a[0].localeCompare(b[0]) === 1)) {
				return 1;
			}
			if (parsea > parseb || (parsea === parseb && a[0].localeCompare(b[0]) === -1)) {
				return -1;
			}
		});
		if (!DESC) {
			moviearray.reverse();
		}
		listMovies(moviearray, indexone, indextwo);
	}
}

/*$("#movielist > li > span:first-child").filter(function(index) {
	return $(this).text().match(RegExp(mstr, 'i')) === null || $(this).text().match(RegExp(ystr)) === null || $(this).next().text().match(RegExp(gstr, 'i')) === null;
}).parent().hide();
$("#movielist > li > span:first-child").filter(function(index) {
	return $(this).text().match(RegExp(mstr, 'i')) && $(this).text().match(RegExp(ystr)) && $(this).next().text().match(RegExp(gstr, 'i'));
}).parent().show();*/

function listMovies(moviearray, index1, index2) {
	recentlyadded = '';
	text = '';
	for (var pi = index1; pi < index2; pi++) {
		str = moviearray[pi][0].replace(/'/g, "\\'");
		if (moviearray[pi][3] !== undefined && moviearray[pi][3] === 'Recently Added') {
			recentlyadded += '<li><span><a style="cursor:pointer" class="gmfl" onclick="getMovieFromList(\'' + str + '\')">ⓘ</a> <a style="cursor:pointer" class="gyt" onclick="getYouTube(\'\', \'' + str + '\' trailer\', \'end\')">✛</a> <a style="cursor:pointer" class="nmm" onclick="nominateMovie(\'' + str + '\', \'#movielist\')">✇</a> ' + moviearray[pi][0] + ' - <b><i>Recently Added</i></b></span><span class="pull-right">' + moviearray[pi][1] + '</span></li>';
		} else {
			text += '<li><span><a style="cursor:pointer" class="gmfl" onclick="getMovieFromList(\'' + str + '\')">ⓘ</a> <a style="cursor:pointer" class="gyt" onclick="getYouTube(\'\', \'' + str + '\' trailer\', \'end\')">✛</a> <a style="cursor:pointer" class="nmm" onclick="nominateMovie(\'' + str + '\', \'#movielist\')">✇</a> ' + moviearray[pi][0] + '</span><span class="pull-right">' + moviearray[pi][1] + '</span></li>';
		}
	}
	$("#movielist").html(recentlyadded + text);
	indextwo = indexone + 20;
}

function filterMovies(mstr, ystr, gstr, info) {
	moviearray = [];
	rafound = 0;
	for (var na = 0; na < Movie_Array.length; na++) {
		if (Movie_Array[na][0].match(RegExp(mstr, 'i')) && Movie_Array[na][0].match(RegExp(ystr)) && Movie_Array[na][1].match(RegExp(gstr, 'i'))) {
			if (Movie_Array[na][3] !== undefined && Movie_Array[na][3] === 'Recently Added') {
				moviearray.splice(rafound, 0, Movie_Array[na]);
				rafound += 1;
			} else {
				moviearray.push(Movie_Array[na]);
			}
		}
	}
	//buttonindex = 2;
	//nbtn = 1;
	indexone = 0;
	indextwo = moviearray.length;
	if (indextwo > 20) {
		indextwo = 20;
	}
	$("#moviepage > li:first").addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
	$("#moviepage > li:first").next().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
	/*pagelength = Math.ceil(moviearray.length / 20);
	if (pagelength > 7) {
		buttonlength = 7;
	}
	moviepagetext = '<li class="disabled"><a href="javascript:void(0)">First</a></li><li class="disabled"><a href="javascript:void(0)">«</a></li>';
	for (var bl = 0; bl < buttonlength; bl++) {
		if (bl === 0) {
			moviepagetext += '<li class="disabled"><a href="javascript:void(0)">' + (bl + 1) + '</a></li>';
		} else {
			moviepagetext += '<li><a href="javascript:void(0)">' + (bl + 1) + '</a></li>';
		}
	}
	moviepagetext += '<li><a href="javascript:void(0)">»</a></li><li><a href="javascript:void(0)">Last</a></li>';
	$("#moviepage").html(moviepagetext);*/
	listMovies(moviearray, indexone, indextwo);
	$("#showing").text('Showing ' + (indexone + 1) + '-' + indextwo + ' of ' + moviearray.length).parent().addClass('disabled');
	info.text('Found ' + moviearray.length + ' movies matching "' + $("#mlistquery").val().trim()  + '" | "' + $("#ylistquery").val().trim() + '" | "' + $("#glistquery").val().trim()  + '"');
}

function appendMovieList() {
	body.append('<span><a style="cursor:pointer" onclick="getMovieFromList()">ⓘ</a> Get Info</span></br >');
	body.append('<span><a style="cursor:pointer" onclick="getYouTube(\'#movielist\')">✛</a> Add Random Trailer (matching search)</span><br />');
	body.append('<span><a style="cursor:pointer" onclick="nominateMovie(\'\', \'#movielist\')">✇</a> Nominate Random Movie (matching search)</span><br />');
	if (CLIENT.name === 'ChillTVBot') {
		body.append('<span><a style="cursor:pointer" onclick="unshareAll(\'#movielist\')">U</a> Unshare All</span><br />');
	}
	body.append('<ul id="marathonlist" style="padding-left: 0;"><button style="padding: 0px 5px; color: rgb(0, 0, 0); border-width: 1px; background-color: inherit; font-weight: 900; border-color: black;" class="marathonexpand">▼</button><span> Marathon List</span></ul>');
	for (var mal = 0; mal < Marathon_List.length; mal++) {
		$('#marathonlist').html($('#marathonlist').html() + '<li style="display: none; margin-left: 40px;"><ul class="marathon" style="padding-left: 0;"><button style="padding: 0px 5px; color: rgb(0, 0, 0); border-width: 1px; background-color: inherit; font-weight: 900; border-color: black;" class="marathonexpand">▼</button> ' + Marathon_List[mal][0] + '</ul></li>');
		for (var mwl = 1; mwl < Marathon_List[mal].length; mwl++) {
			$('.marathon:last').html($('.marathon:last').html() + '<li style="display: none; margin-left: 40px;">' + Marathon_List[mal][mwl] + '</li>');
		}
	}
	$('.marathonexpand').hover(function() {
		$(this).css({'color': 'grey', 'border-color': 'grey'});
	}, function() {
		$(this).parent().children('li').is(':hidden') ? $(this).css({'color': 'black', 'border-color': 'black'}) : $(this).css({'color': 'white', 'border-color': 'white'});
	}).click(function() {
		if ($(this).parent().children('li').is(':hidden')) {
			$(this).parent().children('li').show();
			$(this).text('▲').attr('style', 'background-color: inherit;font-weight: 900;padding: 0 6px 0 7px;border-width: 1px;color: white;border-color: white');
		} else if ($(this).parent().children('li').is(':visible')) {
			$(this).parent().children('li').hide();
			$(this).text('▼').attr('style', 'background-color: inherit;font-weight: 900;padding: 0 5px 0 5px;border-width: 1px;color: black;border-color: black');
		}
	});
	body.append('<span class="text-info trailertext" /><br />');
	if (CLIENT.name === 'ChillTVBot') {
		body.append('<span id="numofuns" class="text-info">Items Unshared: <span class="unshared">'+unshared+'</span> | Items Untouched: <span class="untouched">'+untouched+'</span> | Files Skipped: <span class="skipped">'+skipped+'</span> | Files Iterated: <span class="numfiles">'+numfiles+'</span></span>');
	}
	DESC = true;
	body.append('<center><div id="sortby" style="margin: 5px 0 5px 0"><div style="width: 15%;display: inline-block;font-weight: 900">Sort: </div><div style="width: 15%;display: inline-block"><a id="desc" style="font-weight:900;text-decoration:underline">Desc⮟</a> <a id="asc" style="cursor:pointer">Asc⮝</a></div><div id="sortboxes" style="width:70%;display:inline-block"><label class="checkbox-inline sortby" style="width: 20%"><input type="checkbox" id="sortalpha" class="sortchecks" value="no"> Alphabetical</label><label class="checkbox-inline sortby" style="width: 20%"><input type="checkbox" class="sortchecks" id="sortyear" value="no"> Year</label><button id="moviereset" class="btn btn-xs btn-default" style="width:20%" disabled>Reset</button></div></div></center>');
	RESET = false;
	$("#asc").on('click.cend', function() {
		changeCend($(this));
	});
	sortid = $("#sortby");
	$('.sortchecks').click(function() {
		changeSort($(this).attr('id'));
	});
	//<li class="disabled"><a class="numberbtn" href="javascript:void(0)">1</a></li><li><a class="numberbtn" href="javascript:void(0)">2</a></li><li><a class="numberbtn" href="javascript:void(0)">3</a></li><li><a class="numberbtn" href="javascript:void(0)">4</a></li><li><a class="numberbtn" href="javascript:void(0)">5</a></li><li><a class="numberbtn" href="javascript:void(0)">6</a></li><li><a class="numberbtn" href="javascript:void(0)">7</a></li>
	body.append('<center><ul id="moviepage" class="pagination" style="width:100%"><li class="disabled"><a href="javascript:void(0)" style="width:15%">First</a></li><li class="disabled"><a href="javascript:void(0)" style="width:15%">«</a></li><li class="disabled"><span id="showing" class="text-info" style="width:40%;cursor:auto;color:#93c !important" disabled>Showing 1-20 of 2761</span></li><li><a href="javascript:void(0)" style="width:15%">»</a></li><li><a href="javascript:void(0)" style="width:15%">Last</a></li></ul></center>');
	body.append('<ul id="movielist" style="list-style:none;padding-left:0" ></ul>');
	filterMovies('', '', '', $("#mlinfo"));
	$('#moviepage > li > a').on('click.page', function() {
		$('#moviepage > li').removeClass('disabled').children('a').attr('style', 'width:15%;pointer-events:auto');;
		buttontype = $(this).text();
		if (buttontype === 'First') {
			$(this).parent().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			$(this).parent().next().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			//$(this).parent().next().next().addClass('disabled').children('a').attr('style', 'pointer-events:none');
			//buttonindex = 2;
			/*nbtn = 1;
			$('.numberbtn').each(function(ind) {
				$(this).text(nbtn + ind);
			});*/
			indexone = 0;
			indextwo = 20;
			$("#showing").text('Showing ' + (indexone + 1) + '-' + indextwo + ' of ' + moviearray.length).parent().addClass('disabled');
			listMovies(moviearray, indexone, indextwo);
		}
		if (buttontype === '«') {
			/*if (nbtn > 1) {
				//buttonindex -= 1;
				nbtn -= 1;
				$('.numberbtn').each(function(ind) {
					$(this).text(nbtn + ind);
				});
			}
			if (nbtn <= 4) {
				$('#moviepage > li').eq(nbtn + 1).addClass('disabled').children('a').attr('style', 'pointer-events:none');
			}*/
			indexone -= 20;
			indextwo -= 20;
			if (indexone === 0) {
				$(this).parent().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
				$(this).parent().prev().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			}
			$("#showing").text('Showing ' + (indexone + 1) + '-' + indextwo + ' of ' + moviearray.length).parent().addClass('disabled');
			listMovies(moviearray, indexone, indextwo);
			
		}
		/*if (buttontype.match(/\d+/)) {
			$(this).parent().addClass('disabled').children('a').attr('style', 'pointer-events:none');
			//buttonindex = $(this).parent().index();
			nbtn += parseInt(buttontype) - nbtn;
			$('.numberbtn').each(function(ind) {
				$(this).text(nbtn + ind);
			});
			indexone = (20 * parseInt(buttontype)) - 20;
			indextwo = indexone + 20;
			if (indextwo >= moviearray.length) {
				indextwo = moviearray.length
				$(this).parent().next().addClass('disabled').children('a').attr('style', 'pointer-events:none');
				$(this).parent().next().next().addClass('disabled').children('a').attr('style', 'pointer-events:none');
			}
			if (indexone === 0 ) {
				$(this).parent().prev().addClass('disabled').children('a').attr('style', 'pointer-events:none');
				$(this).parent().prev().prev().addClass('disabled').children('a').attr('style', 'pointer-events:none');
			}
			listMovies(moviearray, indexone, indextwo);
		}*/
		if (buttontype === '»') {
			/*if (nbtn <= (pagelength - buttonlength)) {
				//buttonindex += 1;
				nbtn += 1;
				$('.numberbtn').each(function(ind) {
					$(this).text(nbtn + ind);
				});
			}
			if (nbtn  <= (pagelength - buttonlength)) {
				$('#moviepage > li').eq((nbtn - pagelength) + 14).addClass('disabled').children('a').attr('style', 'pointer-events:none');
			}*/
			indexone += 20;
			indextwo += 20;
			if (indextwo >= moviearray.length) {
				indextwo = moviearray.length
				$(this).parent().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
				$(this).parent().next().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			}
			$("#showing").text('Showing ' + (indexone + 1) + '-' + indextwo + ' of ' + moviearray.length).parent().addClass('disabled');
			listMovies(moviearray, indexone, indextwo);
		}
		if (buttontype === 'Last') {
			$(this).parent().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			$(this).parent().prev().addClass('disabled').children('a').attr('style', 'width:15%;pointer-events:none');
			//$(this).parent().prev().prev().addClass('disabled').children('a').attr('style', 'pointer-events:none');
			//buttonindex = 8;
			/*nbtn = pagelength - buttonlength;
			if (nbtn > 0) {
				$('.numberbtn').each(function(ind) {
					$(this).text(nbtn + 1 + ind);
				});
			}*/
			indexone = moviearray.length - (moviearray.length % 20);
			indextwo = moviearray.length;
			if (indexone === indextwo) {
				indexone -= 20;
			}
			$("#showing").text('Showing ' + (indexone + 1) + '-' + indextwo + ' of ' + moviearray.length).parent().addClass('disabled');
			listMovies(moviearray, indexone, indextwo);
		}
	});
	/*for (var i = 0, i < Movie_Array.length; i++) {
		if (Movie_Array[i][3] !== undefined && Movie_Array[i][3] === 'Recently Added') { //onclick="addShare(\'' + Movie_Array[i][2] + '\', \'' + Movie_Array[i][3] + '\', \'' + Movie_Array[i][4] + '\', \'' + Movie_Array[i][5] + '\', \'' + Movie_Array[i][6] + '\', \'#movielist\', \'' + str + '\')"
			recentlyadded += '<li style="display: block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[i][0] + ' - <b><i>Recently Added</i></b></span><span class="pull-right">' + Movie_Array[i][1] + '</span></li>';
			//lastra = '<li style="display: block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[i][0] + ' - <b><i>Recently Added</i></b></span><span class="pull-right">' + Movie_Array[i][1] + '</span></li>';
		} else {
			text += '<li style="display: block;"><span><a style="cursor:pointer" class="gmfl">ⓘ</a> <a style="cursor:pointer" class="gyt">✛</a> <a style="cursor:pointer" class="nmm">✇</a> ' + Movie_Array[i][0] + '</span><span class="pull-right">' + Movie_Array[i][1] + '</span></li>';
		}
	}*/
	//recentlyadded = recentlyadded.replace('style="display: block;"', 'style="display: block;margin: 5px 0 0 0"').replace(lastra, lastra.replace('style="display: block;"', 'style="display: block;margin: 0 0 5px 0"'));
	/*$('.gmfl').click(function() {
		getMovieFromList($(this).parent().text().split('ⓘ ✛ ✇ ')[1]);
	});
	$('.gyt').click(function() {
		getYouTube('', $(this).parent().text().split('ⓘ ✛ ✇ ')[1] + ' trailer', 'end');
	});
	$('.nmm').click(function() {
		nominateMovie($(this).parent().text().split('ⓘ ✛ ✇ ')[1], '#movielist');
	});*/
	//clonedmovie = $('#movielist').children().clone();
	$("#moviereset").click(function() {
		if (RESET) {
			RESET = false;
			$("#moviereset").attr('disabled', true);
			DESC = true;
			$("#asc, #desc").off('click.cend')
			$("#asc").on('click.cend', function() {
				changeCend($(this));
			});
			$("#asc").attr('style', 'cursor:pointer;font-weight:normal;text-decoration:none');
			$("#desc").attr('style', 'cursor:auto;font-weight:900;text-decoration:underline');
			sortid = $("#sortby");
			$('.sortchecks').prop('checked', false).prop('disabled', false);
			$("#mlistquery, #ylistquery, #glistquery").val('');
			filterMovies('', '', '', $("#mlinfo"));
		}
	});
	//num = $("#movielist li[style='display: block;']").length;
	//$("#mlinfo").text(num + ' movies');
	$("#mlistquery, #ylistquery, #glistquery").keyup(function() {
		$("#mlinfo").text('Searching. Please wait...');
		if ($("#mlistquery").val().trim() !== '') {
			mval = $("#mlistquery").val().trim().replace(/\s+/, ' ').replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
			mvalsplit = mval.split(' ');
			mlistquery = '';
			for (var mv = 0; mv < mvalsplit.length; mv++) {
				mlistquery += '(?=.*' + mvalsplit[mv] + '.*\\(\\d{4}\\).*|.*\\(\\d{4}\\).*' + mvalsplit[mv] + '.*)';
			}
			mlistquery += '.*';
		} else {
			mlistquery = '';
		}
		yval = $("#ylistquery").val().trim()
		if (yval !== '') {
			if (yval.match(/\d{4}(-|–)\d{0,4}/)) {
				firstyear = parseInt(yval.match(/(\d{4})(-|–)/)[1]);
				if (firstyear < 1900) {
					firstyear = 1900;
				}
				secondyear = yval.match(/(-|–)(\d{0,4})/)[2];
				if (secondyear === '' || parseInt(secondyear) > (new Date).getFullYear()) {
					secondyear = (new Date).getFullYear();
				} else {
					secondyear = parseInt(secondyear);
				}
				if (firstyear <= secondyear) {
					yearrange = [];
					for (var yr = firstyear; yr <= secondyear; yr++) {
						if (yr <= secondyear) {
							yearrange.push(yr);
						}
					}
				} else {
					yearrange = [firstyear];
				}
				ylistquery = '\\((' + yearrange.toString().replace(/,/g, '|') + ')\\)';
			} else {
				ylistquery = '\\(\\d*' + yval.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&') + '\\d*\\)';
			}
		} else {
			ylistquery = '';//(?=.*\bunrated\b)(?=.*\bstory\b)
		}
		if ($("#glistquery").val().trim() !== '') {
			gval = $("#glistquery").val().trim().split(/,$/)[0].replace(/\s+/, ' ').replace(/[-[\]{}()*+?.\\^$|#]/g, '\\$&');
			gvalsplit = gval.split(/, | /);
			glistquery = '';
			for (var gv = 0; gv < gvalsplit.length; gv++) {
				glistquery += '(?=.*' + gvalsplit[gv] + ')'
			}
			glistquery += '.*';
		} else {
			glistquery = '';
		}
		//searchStringInArray(mlistquery, ylistquery, glistquery, $("#mlinfo"));
		filterMovies(mlistquery, ylistquery, glistquery, $("#mlinfo"));
	});
}

function createMovieList() {
	createTemp('Nominate a Movie from This List');
	$("body").css('overflow', 'hidden');
	outer.attr('id', 'mlistmodal').children('.modal-dialog.modal-dialog-nonfluid').attr('style', 'max-width: 800px !important');
	$("#mlistmodal").on("hidden.bs.modal", function() {
		MOVLIST = false;
		$("#mlistmodal").remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$('<center id="searchinputs" />').appendTo(body);
	$('<input id="mlistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Title" maxlength="240" />').appendTo($("#searchinputs"));
	$('<input id="ylistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Year (or range)" maxlength="240" />').appendTo($("#searchinputs"));
	$('<input id="glistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Genre(s)" maxlength="240" />').appendTo($("#searchinputs"));
	body.append('<span id="mlinfo" class="text-info" /><br />');
	setTimeout(function() {
		$("#mlistquery").focus();
	}, 250);
	MOVLIST = true;
	if (MOVIELOADED) {
		appendMovieList();
	} else {
		$("#mlinfo").text('Loading Movies. Please wait...');
	}
}

function searchStringInArray(mstr, ystr, gstr, info) {
	if (mstr !== '' || ystr !== '' || gstr !== '') {
		$("#movielist > li > span:first-child").filter(function(index) {
			return $(this).text().match(RegExp(mstr, 'i')) === null || $(this).text().match(RegExp(ystr)) === null || $(this).next().text().match(RegExp(gstr, 'i')) === null;
		}).parent().hide();
		$("#movielist > li > span:first-child").filter(function(index) {
			return $(this).text().match(RegExp(mstr, 'i')) && $(this).text().match(RegExp(ystr)) && $(this).next().text().match(RegExp(gstr, 'i'));
		}).parent().show();
		/*
		$("#movielist").find("li > span:first-child:not(:Contains(" + mstr + "))").parent().hide();
		$("#movielist").find("li:not(:Contains(" + ystr + "))").hide();
		$("#movielist").find("li:not(:Contains(" + gstr + "))").hide();
		$("#movielist").find("li:Contains(" + nstr + ")").show();
		*/
		num = $("#movielist li:visible").length;
		info.text('Found ' + num + ' movies matching "' + $("#mlistquery").val().trim()  + '" | "' + $("#ylistquery").val().trim() + '" | "' + $("#glistquery").val().trim()  + '"');
	} else {
		$("#movielist").children().show();
		num = $("#movielist li:visible").length;
		info.text(num + ' movies');
	}
	$(".trailertext").text('');
}

function getMovieFromList(str) {
	injectIMDB();
	setTimeout(function() {
		$("#movie_input").focus();
	}, 250);
	if (str !== undefined) {
		getMovies(str)
	}
}

var GOBACKBUTTON = false;

omdbkey = '383a5b5a';

function getMovies(sMovie, pagenum) {
	MContainer.prepend('<center class="text-info"><span>Searching. Please wait...</span></center>');
	if (!sMovie) {
		return
	}
	arr = sMovie.split(' (');
	som = encodeURIComponent(arr[0]);
	if (sMovie.match(/\([0-9][0-9][0-9][0-9]\)/)) {
		matches = sMovie.match(/\(([0-9][0-9][0-9][0-9])\)/);
		matches1 = matches[1];
	} else if (sMovie.match(/\([0-9][0-9][0-9][0-9]–/)) {
		matches = sMovie.match(/\(([0-9][0-9][0-9][0-9])–/);
		matches1 = matches[1];
	} else {
		matches1 = '';
	}
	if (matches1.length > 0) {
		sUrl = 'https://www.omdbapi.com/?t=' + som + '&y=' + matches1 + '&plot=full&tomatoes=true&totalSeasons=true&apikey=' + omdbkey;
		$.ajax(sUrl, {
			error: function(data) {
				MContainer.find('.text-info').text('Connection Error: Try again later.');
				MContainer.show();
			},
			complete: function(data) {
				oData = $.parseJSON(data.responseText);
				rurl = 'https://www.rottentomatoes.com/search/?search=' + encodeURIComponent(som);
				if (oData.Title !== undefined) {
					if (GOBACKBUTTON) {
						gobackbutton.prependTo(MContainer);
						$("#gobackbutton").click(function() {
							gobackbutton.remove();
							GOBACKBUTTON = false;
						});
					}
					MContainer.find('.text-info').remove();
					$("#listthem").children().remove();
					$("#listep").children().remove();
					MContainer.show();
					MContainer.children().show();
					url = "http://www.imdb.com/title/" + oData.imdbID;
					url2 = 'http://www.imdb.com/find?s=all&q=' + encodeURIComponent(som + ' ' + matches1);
					MContainer.find('.movieposter').html('<tr><th style="width:101px;"><img class="posterimage" style="cursor:pointer;" height="150" src="'+oData.Poster+'" /></th><th><table style="width:100%;"><tr><th style="float:left;margin-left:10px;"><h3 class="movietitle"></h3></th></tr><tr><th style="float:left;margin-left:10px;"><a style="cursor:pointer" class="addtrailer"></a></th><th style="float:right;margin-right:10px;"><a style="cursor:pointer" class="addmovie"></a></th></tr></table></th></tr>')
					MContainer.find('.posterimage').click(function() {
						window.open(oData.Poster, '_blank');
					});
					MContainer.find('.movietitle').text(oData.Title + ' (' + oData.Year + ')');
					$('.addtrailer').click(function() {
						getYouTube('', oData.Title + ' trailer', 'end');
					}).text('Add Trailer');
					if (oData.Type === 'movie') {
						for (var am = 0; am < Movie_Array.length; am++) {
							moviechop = Movie_Array[am][0].match(/ \([0-9][0-9][0-9][0-9]\)(.*)/)[1];
							if (moviechop.length > 0) {
								moviename = Movie_Array[am][0].split(moviechop)[0];
							} else {
								moviename = Movie_Array[am][0];
							}
							if (moviename.toLowerCase() === oData.Title.toLowerCase() + ' (' + oData.Year + ')') {
								$('.addmovie').click(function() {
									nominateMovie(Movie_Array[am][0], '#movielist');
								}).text('Nominate Movie');
								break;
							}
							if (am === Movie_Array.length - 1) {
								$('.addmovie').click(function() {
									window.open("http://goo.gl/forms/5fK5rDjTjD");
								}).text('Request This');
							}
						}
					} else {
						for (var at = 0; at < TV_Array.length; at++) {
							if (TV_Array[at][0].match(/\([0-9][0-9][0-9][0-9]/)) {
								if (TV_Array[at][0].toLowerCase() === oData.Title.toLowerCase() + ' (' + oData.Year + ')') {
									$('.addmovie').click(function() {
										//addShare(TV_Array[at+1][2], TV_Array[at+1][3], TV_Array[at+1][4], TV_Array[at+1][5], TV_Array[at+1][6], '.serieslist', TV_Array[at+1][0]);
										viewSeasons(oData.Title, oData.Year, oData.Poster, oData.totalSeasons);
									}).text('View Episodes');
									break;
								}
							}
							if (at === TV_Array.length - 1) {
								$('.addmovie').click(function() {
									window.open("http://goo.gl/forms/5fK5rDjTjD");
								}).text('Request This');
							}
						}
					}
					MContainer.find('.movieinfo').text(oData.Rated + ' | ' + oData.Runtime + ' | ' + oData.Genre + ' | ' + oData.Released + ' | IMDb Rating: ' + oData.imdbRating + ' from ' + oData.imdbVotes + ' users | Metascore: ' + oData.Metascore);
					MContainer.find('.movieplot').text(oData.Plot);
					MContainer.find('.moviecast').text('Directors: ' + oData.Director + ' | Writers: ' + oData.Writer + ' | Actors: ' + oData.Actors);
					MContainer.find('.movieother').text(oData.Language + ' | ' + oData.Country + ' | ' + oData.Awards);
					MContainer.find('.plink').text('More Info: ');
					MContainer.find('.imdblink').attr({
						'href': url,
						'target': '_blank'
					}).text(url);
					MContainer.find('.rtinfo').text('Tomato Meter: ' + oData.tomatoMeter + '% ' + oData.tomatoImage + ' | Average Rating: ' + oData.tomatoRating + ' | Reviews Counted: ' + oData.tomatoReviews + ', Fresh: ' + oData.tomatoFresh + ', Rotten: ' + oData.tomatoRotten);
					MContainer.find('.rtplot').text('Critics Consensus: ' + oData.tomatoConsensus);
					MContainer.find('.rtcast').text('Users: ' + oData.tomatoUserMeter + '% liked it, ' + oData.tomatoUserRating + '/5 average rating, ' + oData.tomatoUserReviews + ' reviews');
					MContainer.find('.prtlink').text('More Info: ');
					MContainer.find('.rtlink').attr({
						'href': rurl,
						'target': '_blank'
					}).text(rurl);
				} else {
					theList(som, pagenum);
				}
			}
		});
	} else {
		theList(som, pagenum);
	}
}

function totalSeasons(stitle, syear) {
	MContainer.find('.text-info').show().text('Searching. Please wait...');
	$.ajax('https://www.omdbapi.com/?t=' + stitle + '&y=' + syear + '&plot=full&tomatoes=true&totalSeasons=true&apikey=' + omdbkey, {
		error: function(data) {
			MContainer.find('.text-info').text('Connection Error: Please refresh or try again later.');
			MContainer.show();
		},
		success: function(data) {
			MContainer.children().hide();
			MContainer.children().text('');
			viewSeasons(data.Title, data.Year, data.Poster, data.totalSeasons);
		}
	});
}

function viewSeasons(stitle, syear, sposter, tseasons) {
	MContainer.children().hide();
	MContainer.children().text('');
	$("#listthem").children().remove();
	$("#listep").children().remove();
	$("#listep").show();
	if (GOBACKBUTTON) {
		gobackbutton.prependTo("#listep");
		$("#gobackbutton").click(function() {
			gobackbutton.remove();
			GOBACKBUTTON = false;
		});
	}
	sstri = stitle.replace(/'/g, "\\'");
	$('<br /><center><table style="width:100%;"><tr><th style="width: 67px"><img style="width: 67px" src="' + sposter + '" /></th><th><table style="width:100%"><tr><th style="float:left;"><a style="margin-left:10px;font-size:20px;cursor:pointer;" onclick="getMovies(\'' + sstri + ' (' + syear + ')\')"> ' + stitle + ' (' + syear + ')</a></th></tr><tr ><th style="float:left;margin-left:10px"><a style="cursor:pointer" onclick="getYouTube(\'\', \'' + sstri + ' trailer\', \'end\')">Add Trailer</a></th><th style="float:right;margin-right:10px"></th></tr></table></th></tr></table></center>').appendTo("#listep");
	$('<br /><br /><div id="beforeall"><div id="addseason"></div></div>').appendTo("#listep");
	seasonslength = parseInt(tseasons);
	seasons = 'Seasons: ';
	for (var sl = 0; sl < seasonslength; sl++) {
		seasonnumber = sl + 1;
		seasons += '<a style="cursor:pointer" onclick="callEps(\'' + stitle + '\', \'' + syear + '\', \'' + seasonnumber + '\')">' + seasonnumber + '</a>  ';
	}
	$("#addseason").html(seasons);
}

function callEps(stitle, syear, season) {
	$("#beforeall").nextAll().remove();
	$.ajax('https://www.omdbapi.com/?t=' + stitle + '&Season=' + season + '&y=' + syear + '&apikey=' + omdbkey, {
		error: function(data) {
			console.log(data);
			MContainer.find('.text-info').text('Connection Error: Please refresh or try again later.');
			MContainer.show();
		},
		success: function(data) {
			epdata = data.Episodes;
			for (var ep = 0; ep < epdata.length; ep++) {
				data.Season.length === 1 ? seasonzero = '0' : seasonzero = '';
				epdata[ep].Episode.length === 1 ? episodezero = '0' : episodezero = '';
				$("#listep").append('<br><br><span style="float:left;">S' + seasonzero + data.Season + 'E' + episodezero + epdata[ep].Episode + ' - ' + epdata[ep].Title + '</span><span class="addorrequest" style="float:right;"><a style="cursor:pointer" onclick="nominateTV(\'' + data.Title.replace(/'/g, "\\'") + ' (' + syear + ') S' + seasonzero + data.Season + 'E' + episodezero + epdata[ep].Episode + ' - ' + epdata[ep].Title.replace(/'/g, "\\'") + '\', \'.serieslist\')">Nominate Episode</a></span><br><span>' + epdata[ep].Released + ' | IMDb Rating: ' + epdata[ep].imdbRating + '</span>');
			}
		},
		
	});
}
/*
function callCheck(deps, ep, stitle, syear, sseason, li, eparray, sspl, ssfo, sposter) {
	SAMESEASON = false;
	$("#beforeall").nextAll().remove();
	LEZAGO = false;
	$.ajax('https://www.omdbapi.com/?t=' + stitle + '&y=' + syear + '&Season=' + sseason + '&Episode=' + ep + '&apikey=' + omdbkey, {
		error: function(data) {
			MContainer.find('.text-info').text('Connection Error: Please refresh or try again later.');
			MContainer.show();
		},
		success: function(data) {
			LEZAGO = true;
		},
		complete: function(data) {
			if (LEZAGO) {
				SAMESEASON = true;
				$("#beforeall").nextAll().remove();
				callEp(deps, ep, stitle, syear, sseason, li, eparray, sspl, ssfo, sposter);
			}
		}
	});
}

function callEp(deps, ep, stitle, syear, sseason, li, eparray, sspl, ssfo, sposter) {
	EPSUCCESS = false;
	if (eparray.indexOf(ep) > -1 && SAMESEASON) {
		$.ajax('https://www.omdbapi.com/?t=' + stitle + '&y=' + syear + '&Season=' + sseason + '&Episode=' + ep + '&apikey=' + omdbkey, {
			error: function(data) {
				console.log(data);
				MContainer.find('.text-info').text('Connection Error: Please refresh or try again later.');
				MContainer.show();
			},
			success: function(data) {
				if (SAMESEASON) {
					etitle = data.Title;
					ereleased = data.Released;
					eseason = data.Season;
					if (parseInt(eseason) < 10) {
						eseason = '0' + eseason;
					}
					eepisode = data.Episode;
					if (parseInt(eepisode) < 10) {
						eepisode = '0' + eepisode;
					}
					eruntime = data.Runtime;
					eplot = data.Plot;
					eposter = data.Poster;
					eimdbrating = data.imdbRating;
					eimdbvotes = data.imdbVotes;
					eimdbid = data.imdbID;
					EPSUCCESS = true;
				}
			},
			complete: function(data) {
				if (SAMESEASON) {
					BREAKFREE = false;
					if (EPSUCCESS) {
						$('<br /><br /><span style="float:left;">S' + eseason + 'E' + eepisode + ' - ' + etitle + '</span><span class="addorrequest" style="float:right;"></span><br /><span>' + eruntime + ' | ' + ereleased + ' | IMDb Rating: ' + eimdbrating + ' from ' + eimdbvotes + ' users</span><br /><span>' + eplot + '</span>').appendTo($("#listep"));
						for (var dir = 0; dir < TV_Array.length; dir++) {
							if (SAMESEASON) {
								if (TV_Array[dir][2] === undefined) {
									if (TV_Array[dir][0].toLowerCase() === stitle.toLowerCase() + ' (' + syear + ')') {
										posish = dir+1;
										for (var ne = posish; ne < TV_Array.length; ne++) {
											if (SAMESEASON) {
												if (TV_Array[ne][0].indexOf('S' + eseason + 'E' + eepisode) === 0) {
													str = TV_Array[ne][0].replace(/'/g, "\\'");
													$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" onclick="nominateTV(\'' + str + '\', \'.serieslist\')">Nominate Episode</a>');
													BREAKFREE = true;
													break;
												}
												if (TV_Array[ne][2] === undefined) {
													break;
												}
											} else {
												break;
											}
										}
										if (BREAKFREE) {
											break;
										}
									}
								}
								if (dir === TV_Array.length - 1) {
									$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" >Request This</a>').click(function() {
										window.open("http://goo.gl/forms/5fK5rDjTjD");
									});
								}
							} else {
								break;
							}
						}
						if (parseInt(li) + 1 <= deps && SAMESEASON) {
							eppa = parseInt(ep) + 1;
							lipa = parseInt(li) + 1;
							callEp(deps, eppa.toString(), stitle, syear, sseason, lipa.toString(), eparray, sspl, ssfo, sposter);
						}
					}
				}
			}
		});
	} else if (parseInt(ep) <= parseInt(eparray[eparray.length - 1])) {
		if (parseInt(sseason) < 10) {
			sseason = '0' + sseason;
		}
		if (parseInt(ep) < 10) {
			ep = '0' + ep;
		}
		BREAKFREE = false;
		for (var ske = 0; ske < TV_Array.length; ske++) {
			if (SAMESEASON) {
				if (TV_Array[ske][2] === undefined) {
					if (TV_Array[ske][0].toLowerCase() === stitle.toLowerCase() + ' (' + syear + ')') {
						posish = ske+1;
						for (var nex = posish; nex < TV_Array.length; nex++) {
							if (SAMESEASON) {
								if (TV_Array[nex][0].indexOf('S' + sseason + 'E' + ep) === 0) {
									str = TV_Array[nex][0].replace(/'/g, "\\'");
									$('<br /><br /><span style="float:left;">S' + sseason + 'E' + ep + ' - N/A</span><span class="addorrequest" style="float:right;"></span><br /><span>N/A | N/A | IMDb Rating: N/A</span><br /><span>N/A</span>').appendTo($("#listep"));
									$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" onclick="nominateTV(\'' + str + '\', \'.serieslist\')">Nominate Episode</a>');
									BREAKFREE = true;
									break;
								}
								if (TV_Array[nex][2] === undefined) {
									break;
								}
							} else {
								break;
							}
						}
						if (BREAKFREE) {
							break;
						}
					}
				}
				if (ske === TV_Array.length - 1) {
					$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" >Request This</a>').click(function() {
						window.open("http://goo.gl/forms/5fK5rDjTjD");
					});
				}
			} else {
				break;
			}
		}
		if (parseInt(li) + 1 <= deps && SAMESEASON) {
			eppa = parseInt(ep) + 1;
			lipa = parseInt(li) + 1;
			callEp(deps, eppa.toString(), stitle, syear, sseason, lipa.toString(), eparray, sspl, ssfo, sposter);
		}
	}
}
*/
function theList(som, pagenum, goback) {
	MContainer.children().hide();
	MContainer.children().text('');
	MContainer.find('.text-info').show().text('Searching. Please wait...');
	$("#listthem").children().remove();
	$("#listep").children().remove();
	$.ajax('https://www.omdbapi.com/?s=' + som + '&y=&page=' + pagenum + '&apikey=' + omdbkey, {
		error: function(data) {
			MContainer.find('.text-info').text('Connection Error: Please refresh or try again later.');
			MContainer.show();
		},
		success: function(data) {
			MContainer.find('.text-info').remove();
			strsom = som.replace(/'/g, "\\'");
			gobackbutton = $('<button id="gobackbutton" class="btn btn-sm btn-default" style="margin-bottom:10px" onclick="theList(\''+strsom+'\', '+pagenum+')">⇦ Back</button><br />');
			GOBACKBUTTON = true;
			thesearchresults = data.Search;
			$('<center><button style="float:left;margin:5px 0 5px 0;" class="btn btn-sm btn-default backbutton"><<</button><span class="text-info trailertext"></span><button style="float:right;margin:5px 0 5px 0;" class="btn btn-sm btn-default forwardbutton">>></button></center>').prependTo($("#listthem"));
			for (var li = 0; li < thesearchresults.length; li++) {
				stri = thesearchresults[li].Title.replace(/'/g, "\\'");
				$("#listthem").append('<table style="width:100%;border-bottom: 1px solid white;border-top: 1px solid white;"><tr><th style="width: 67px"><img style="width: 67px" src="' + thesearchresults[li].Poster + '" /></th><th><table style="width:100%"><tr><th style="float:left;"><a style="margin-left:10px;font-size:20px;cursor:pointer;" onclick="getMovies(\'' + stri + ' (' + thesearchresults[li].Year + ')\')"> ' + thesearchresults[li].Title + ' (' + thesearchresults[li].Year + ')</a></th></tr><tr ><th style="float:left;margin-left:10px"><a style="cursor:pointer" onclick="getYouTube(\'\', \'' + stri + ' trailer\', \'end\')">Add Trailer</a></th><th style="float:right;margin-right:10px" class="addorrequest"></th></tr></table></th></tr></table>');
				if (thesearchresults[li].Type === 'movie') {
					for (var aq = 0; aq < Movie_Array.length; aq++) {
						moviechop = Movie_Array[aq][0].match(/ \([0-9][0-9][0-9][0-9]\)(.*)/)[1];
						if (moviechop.length > 0) {
							moviename = Movie_Array[aq][0].split(moviechop)[0];
						} else {
							moviename = Movie_Array[aq][0];
						}
						if (moviename.toLowerCase() === thesearchresults[li].Title.toLowerCase() + ' (' + thesearchresults[li].Year + ')') {
							str = Movie_Array[aq][0];
							$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" onclick="nominateMovie(\'' + str + '\', \'#movielist\')">Nominate Movie</a>');
							break;
						}
						if (aq === Movie_Array.length - 1) {
							$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" >Request This</a>').click(function() {
								window.open("http://goo.gl/forms/5fK5rDjTjD");
							});
						}
					}
				} else {
					for (var dr = 0; dr < TV_Array.length; dr++) {
						if (TV_Array[dr][0].match(/\([0-9][0-9][0-9][0-9]/)) {
							if (TV_Array[dr][0].toLowerCase() === thesearchresults[li].Title.toLowerCase() + ' (' + thesearchresults[li].Year + ')') {
								str = thesearchresults[li].Title.replace(/'/g, "\\'");
								$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" onclick="totalSeasons(\''+str+'\', \''+thesearchresults[li].Year+'\')">View Episodes</a>');
								break;
							}
						}
						if (dr === TV_Array.length - 1) {
							$('.addorrequest:eq('+li+')').html('<a style="cursor:pointer" >Request This</a>').click(function() {
								window.open("http://goo.gl/forms/5fK5rDjTjD");
							});
						}
					}
				}
			}
			$('<center><button style="float:left;margin:5px 0 5px 0;" class="btn btn-sm btn-default backbutton"><<</button><button style="float:right;margin:5px 0 5px 0;" class="btn btn-sm btn-default forwardbutton">>></button></center>').appendTo($("#listthem"));
			totalresults = data.totalResults;
			totalpages = Math.ceil(totalresults / 10);
			nextpagenum = pagenum + 1;
			if (nextpagenum <= totalpages) {
				$(".forwardbutton").click(function() {
					getMovies(som + ' ()', nextpagenum);
				});
			} else {
				$(".forwardbutton").prop('disabled', true);
			}
			prevpagenum = pagenum - 1;
			if (prevpagenum > 0) {
				$(".backbutton").click(function() {
					getMovies(som + ' ()', prevpagenum);
				});
			} else {
				$(".backbutton").prop('disabled', true);
			}
		}
	});
	$("#listthem").show();	
}

var TVLIST = false;
$('<button id="tvlistbtn" class="btn btn-sm btn-default" title="Check out our TV List">TV List</button>').appendTo("#underplaylist").on("click", function() {
	createTVList();
});

TVKEYWAIT = setTimeout(function(){},1);
function appendTVList() {
	body.append('<span><a style="cursor:pointer" onclick="getMovieFromList()">ⓘ</a> Get Info</span></br >');
	body.append('<span><a style="cursor:pointer" onclick="getYouTube(\'.serieslist\')">✛</a> Add Trailer</span><br />');
	body.append('<span><a style="cursor:pointer" onclick="nominateTV(\'\', \'.serieslist\')">✇</a> Nominate Episode</span><br />');
	if (CLIENT.name === 'ChillTVBot') {
		body.append('<span><a style="cursor:pointer" onclick="unshareAll(\'.serieslist\')">U</a> Unshare All</span><br />');
	}
	body.append('<span class="text-info trailertext" /><br />');
	if (CLIENT.rank === 'ChillTVBot') {
		body.append('<span id="numofuns" class="text-info">Items Unshared: <span class="unshared">'+unshared+'</span> | Items Untouched: <span class="untouched">'+untouched+'</span> | Files Skipped: <span class="skipped">'+skipped+'</span> | Files Iterated: <span class="numfiles">'+numfiles+'</span></span>');
	}
	body.append('<div id="tvlist" />');
	text = '';
	recentlytv = '';
	RECENT = false;
	for (var tvi = 0; tvi < TV_Array.length; tvi++) {
		str = TV_Array[tvi][0].replace(/'/g, "\\'");
		if (TV_Array[tvi][2] !== undefined && TV_Array[tvi][2] !== 'Recently Added') {
			if (RECENT) {
				recentlytv += '<li style="display: none;padding-left: 60px;"><span><a style="cursor:pointer" onclick="nominateTV(\'' + showname + ' ' + str + '\', \'.serieslist\')">✇</a> ' + TV_Array[tvi][0] + '</span></li>';
			} else {
				text += '<li style="display: none;padding-left: 60px;"><span><a style="cursor:pointer" onclick="nominateTV(\'' + showname + ' ' + str + '\', \'.serieslist\')">✇</a> ' + TV_Array[tvi][0] + '</span></li>';
			}
		} else {
			if (TV_Array[tvi][2] === 'Recently Added') {
				RECENT = true;
				recentlytv += '</ul><ul class="serieslist" style="display: block; list-style: none; padding-left: 0px;"><button style="padding: 0 5px 0 5px;color: black;border-width: 1px;border-color: black;background-color: inherit;font-weight: 900;" class="seriesexpand" >▼</button> <a style="cursor:pointer" onclick="getMovieFromList(\'' + str + '\')">ⓘ</a> <a style="cursor:pointer" onclick="getYouTube(\'\', \'' + str + ' trailer\', \'end\')">✛</a> <span class="seriestitle">' + TV_Array[tvi][0] + ' - <i><b>Recently Added</b></i></span><span class="pull-right">' + TV_Array[tvi][1] + '</span>';
				showname = str;
			} else {
				RECENT = false;
				text += '</ul><ul class="serieslist" style="display: block; list-style: none; padding-left: 0px;"><button style="padding: 0 5px 0 5px;color: black;border-width: 1px;border-color: black;background-color: inherit;font-weight: 900;" class="seriesexpand" >▼</button> <a style="cursor:pointer" onclick="getMovieFromList(\'' + str + '\')">ⓘ</a> <a style="cursor:pointer" onclick="getYouTube(\'\', \'' + str + ' trailer\', \'end\')">✛</a> <span class="seriestitle">' + TV_Array[tvi][0] + '</span><span class="pull-right">' + TV_Array[tvi][1] + '</span>';
				showname = str;
			}
		}
	}
	$("#tvlist").append(recentlytv + text);
	$('.seriesexpand').hover(function() {
		$(this).css({
			'color': 'grey',
			'border-color': 'grey'
		});
	}, function() {
		$(this).parent().children('li').is(':hidden') ? $(this).css({
			'color': 'black',
			'border-color': 'black'
		}) : $(this).css({
			'color': 'white',
			'border-color': 'white'
		});
	}).click(function() {
		if ($(this).parent().children('li').is(':hidden')) {
			$(this).parent().children('li').show();
			$(this).text('▲').attr('style', 'background-color: inherit;font-weight: 900;padding: 0 5px 0 5px;border-width: 1px;color: white;border-color: white');
		} else if ($(this).parent().children('li').is(':visible')) {
			$(this).parent().children('li').hide();
			$(this).text('▼').attr('style', 'background-color: inherit;font-weight: 900;padding: 0 5px 0 5px;border-width: 1px;color: black;border-color: black');
		}
	});
	num = $(".serieslist li").length;
	$("#tvlinfo").text(num + ' episodes');
	$("#tvmlistquery, #tvylistquery, #tvglistquery").keyup(function() {
		clearTimeout(TVKEYWAIT);
		$("#tvlinfo").text('Searching. Please wait...');
		TVKEYWAIT = setTimeout(function() {
			if ($("#tvmlistquery").val().trim() !== '') {
				tvmval = $("#tvmlistquery").val().trim().replace(/\s+/, ' ').replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
				tvmvalsplit = tvmval.split(' ');
				tvmlistquery = '';
				for (var tvv = 0; tvv < tvmvalsplit.length; tvv++) {
					tvmlistquery += '(?=.*' + tvmvalsplit[tvv] + '.*\\(\\d{4}–{0,1}\\d{0,4}\\).*|.*\\(\\d{4}–{0,1}\\d{0,4}\\).*' + tvmvalsplit[tvv] + '.*)';
				}
				tvmlistquery += '.*';
			} else {
				tvmlistquery = '';
			}
			if ($("#tvylistquery").val().trim() !== '') {
				tvylistquery = '\\([\\d–]*' + $("#tvylistquery").val().trim().replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&').replace(/-/g, '–') + '[\\d–]*\\)';
			} else {
				tvylistquery = '';
			}
			if ($("#tvglistquery").val().trim() !== '') {
				tvgval = $("#tvglistquery").val().trim().split(/,$/)[0].replace(/\s+/, ' ').replace(/[-[\]{}()*+?.\\^$|#]/g, '\\$&');
				tvgvalsplit = tvgval.split(/, | /);
				tvglistquery = '';
				for (var tvgv = 0; tvgv < tvgvalsplit.length; tvgv++) {
					tvglistquery += '(?=.*' + tvgvalsplit[tvgv] + ')'
				}
				tvglistquery += '.*';
			} else {
				tvglistquery = '';
			}
			searchStringInArrayTV(tvmlistquery, tvylistquery, tvglistquery, $("#tvlinfo"));
		}, 500);
	});
}

function createTVList() {
	createTemp('Nominate/Add a TV Series from This List');
	$("body").css('overflow', 'hidden');
	outer.attr('id', 'tvlistmodal').children('.modal-dialog.modal-dialog-nonfluid').attr('style', 'max-width: 800px !important');
	$("#tvlistmodal").on("hidden.bs.modal", function() {
		TVLIST = false;
		$("#tvlistmodal").remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$('<center id="tvsearchinputs" />').appendTo(body);
	$('<input id="tvmlistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Title" maxlength="240" />').appendTo($("#tvsearchinputs"));
	$('<input id="tvylistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Year" maxlength="240" />').appendTo($("#tvsearchinputs"));
	$('<input id="tvglistquery" class="form-control" style="width:33%;display:inline-block;" type="text" placeholder="Search Genre" maxlength="240" />').appendTo($("#tvsearchinputs"));
	body.append('<span id="tvlinfo" class="text-info" /><br />');
	setTimeout(function() {
		$("#tvmlistquery").focus();
	}, 250);
	if (TVLOADED) {
		appendTVList();
	} else {
		$("#tvlinfo").text('Loading Episodes. Please wait...');
	}
	TVLIST = true;
}

function searchStringInArrayTV(mstr, ystr, gstr, info) {
	if (mstr !== '' || ystr !== '' || gstr !== '') {
		/*$('.serieslist > li').filter(function(index) {
			return ($(this).parent().children('.seriestitle').eq(index).text() + ' ' + $(this).text()).match(RegExp(mstr, 'i')) === null;
		}).hide();
		$('.serieslist > li').filter(function(index) {
			return ($(this).parent().children('.seriestitle').eq(index).text() + ' ' + $(this).text()).match(RegExp(mstr, 'i'));
		}).show();*/
		$("#tvlist > ul > span:nth-child(4)").filter(function(index) {
			return $(this).text().match(RegExp(mstr, 'i')) === null || $(this).text().match(RegExp(ystr)) === null || $(this).next().text().match(RegExp(gstr, 'i')) === null;
		}).parent().hide();
		$("#tvlist > ul > span:nth-child(4)").filter(function(index) {
			return $(this).text().match(RegExp(mstr, 'i')) && $(this).text().match(RegExp(ystr)) && $(this).next().text().match(RegExp(gstr, 'i'));
		}).parent().show();
		/*
		$(".serieslist:not(:Contains(" + nstr + "))").hide();
		$(".serieslist:Contains(" + nstr + ")").show();
		*/
		num = $(".serieslist:visible li").length;
		info.text('Found ' + num + ' episodes matching "' + $("#tvmlistquery").val().trim()  + '" | "' + $("#tvylistquery").val().trim() + '" | "' + $("#tvglistquery").val().trim()  + '"');
	} else {
		$(".serieslist").show();
		num = $(".serieslist li").length;
		info.text(num + ' episodes')
	}
	$(".trailertext").text('');
}

$('<button id="requestbtn" class="btn btn-sm btn-default" title="We Don\'t Have it? Request it Here!">Request More</button>').appendTo("#underplaylist")
	.on("click", function() {
		window.open("http://goo.gl/forms/5fK5rDjTjD");
	});

var DONEDELETING = true;
function unshareAll(typelist) {
	if (DONEDELETING) {
		DONEDELETING = false;
		if (typelist === '#movielist') {
			typelistarray = Movie_Array;
		}
		if (typelist === '.serieslist') {
			typelistarray = TV_Array;
		}
		$.ajax({
			url: 'https://www.googleapis.com/oauth2/v3/token?client_id=989762828175-kjf3580c9t3q3lp8c7npl2kpjfgchmkd.apps.googleusercontent.com&client_secret='+SECRETKEY+'&refresh_token=1/MN569YlPLnR4u0n0bj56T5ttKCizY8gg5vL-IziEldFIgOrJDtdun6zK6XiATCKT&grant_type=refresh_token',
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			success: function(data) {
				SUCKDELL = true;
				ACTO = data.access_token;
			},
			error: function(data) {
				SUCKDELL = false;
				if (SECRETKEY.length === 0) {
					$('.trailertext').text('Unauthorized request.');
				} else {
					$('.trailertext').text('Error: Token request failed. Secret key is incorrect.');
				}
			},
			complete: function(data) {
				if (SUCKDELL) {
					playlisttoskip = [];
					getqueuelength = $("#queue .queue_entry").length;
					if (getqueuelength > 0) {
						for (var pls = 0; pls < getqueuelength; pls++) {
							itemhref = $("#queue .queue_entry:eq("+pls+")").children('.qe_title').attr('href');
							if (itemhref.indexOf('https://docs.google.com/file/d/') === 0) {
								playlisttoskip.push(itemhref.split('https://docs.google.com/file/d/')[1]);
							}
						}
					}
					lasttla = -1;
					unshared = 0;
					untouched = 0;
					skipped = 0;
					numfiles = 0;
					namesdel = [];
					deleteDatShit(typelistarray, 0, 2);
				}
			}
		});
	}
}

function deleteDatShit(typelistarray, tla, tlb) {
	idtodelete = typelistarray[tla][tlb];
	if (idtodelete !== undefined && $.inArray(idtodelete, playlisttoskip) === -1) {
		$.ajax({
			url: 'https://www.googleapis.com/drive/v2/files/' + idtodelete + '/permissions/anyoneWithLink?access_token=' + ACTO,
			type: 'DELETE',
			contentType: 'application/json',
			dataType: 'json',
			success: function(data) {
				if (lasttla !== tla) {
					unshared += 1;
					$('.unshared').text(unshared);
					namesdel.push(typelistarray[tla][0]);
				}
			},
			error: function(data) {
				console.log(data);
				if (lasttla !== tla) {
					untouched += 1;
					$('.untouched').text(untouched);
				}
			},
			complete: function(data) {
				numfiles += 1;
				$('.numfiles').text(numfiles);
				lasttla = tla;
				if (typelistarray[tla][tlb + 1] !== undefined) {
					tlb += 1;
					deleteDatShit(typelistarray, tla, tlb)
				} else if (tla + 1 < typelistarray.length) {
					tla += 1;
					deleteDatShit(typelistarray, tla, 2);
				} else {
					DONEDELETING = true;
				}
			}
		});
	} else {
		if ($.inArray(idtodelete, playlisttoskip) > -1) {
			skipped += 1;
			$('.skipped').text(skipped);
		}
		deleteDatShit(typelistarray, tla + 1, 2);
	}
}

var GTMR = false;
giphysearchbtn = $('<button id="giphysearch-btn" class="btn btn-sm btn-default" title="Toggle Gif Search">Giphy</button>')
	.appendTo(querycontrols)
	.on("click", function() {
		if (!GTMR) {
			injectGiphy();
			setTimeout(function() {
				$("#giphy_input").focus().val('');
			}, 250);
			GTMR = true;
			setTimeout(function() {
				GTMR = false;
			}, 1000);
		}
	});

imdbsearchbtn = $('<button id="imdbsearch-btn" class="btn btn-sm btn-default" title="Show Movie/TV Search">Movie/TV Info</button>')
	.appendTo(querycontrols)
	.on("click", function() {
		injectIMDB();
		setTimeout(function() {
			$("#movie_input").focus();
		}, 250);
	});

kickasssearchbtn = $('<button id="kickasssearch-btn" class="btn btn-sm btn-default" title="Toggle Pirate Bay Search">PBay</button>')
	.appendTo(querycontrols)
	.on("click", function() {
		injectKickass();
		$("#kickass_query").focus();
	});

function clickPic() {
	outer.modal('hide');
}

DONTSPAMGIPHY = true;

function getGiphy(p_oEvent) {
	p_oEvent.preventDefault();
	if (DONTSPAMGIPHY) {
		DONTSPAMGIPHY = false;
		setTimeout(function() {
			DONTSPAMGIPHY = true;
		}, 1000);
		$('.imagesearch').text('Searching...');
		$('#single').attr('src', '').attr('onclick', '').hide();
		$('.giphyimage').hide();
		$(".gforwardbutton").prop('disabled', true);
		$(".gbackbutton").prop('disabled', true);
		$(".gbackbutton").off('click');
		$(".gforwardbutton").off('click');
		$('.giphyimage').find('img').each(function() {
			$(this).attr('src', '');
			$(this).attr('onclick', '');
		});
		SINGLE = false;
		gifterm = $("#giphy_input").val();
		giff = encodeURIComponent(gifterm);
		if ($("#gifs").prop('checked')) {
			giftype = 'gifs';
		} else {
			giftype = 'stickers';
		}
		TRANSLATE = false;
		RANDOM = false;
		if (TRENDING) {
			searchtype = 'trending?limit=99';
		} else {
			if ($("#search").prop('checked')) {
				searchtype = 'search?q=' + giff + '&limit=99';
			} else if ($("#translate").prop('checked')) {
				searchtype = 'translate?s=' + giff;
				SINGLE = true;
				TRANSLATE = true;
			} else {
				searchtype = 'random?tag=' + giff;
				SINGLE = true;
				RANDOM = true;
			}
		}
		theurl = 'https://api.giphy.com/v1/' + giftype + '/' + searchtype + '&api_key=dc6zaTOxFJmzC';
		$.ajax({
			url: theurl,
			jsonp: 'callback',	
			dataType: 'json',
			success: function(data) {
				console.log(data);
				imagedata = data.data;
				if (imagedata !== undefined) {
					//onclick="insertText(\'' + imageid + '.pic \');clickPic()" src="' + imageid + '"
					if (SINGLE) {
					$('.imagesearch').text('"' + gifterm + '"');
						if (TRANSLATE) {
							$("#single").attr('src', imagedata.images.original.url).attr('onclick', 'insertText(\'' + imagedata.images.original.url + '.pic \');clickPic()').show();
						} else {
							$("#single").attr('src', imagedata.image_url).attr('onclick', 'insertText(\'' + imagedata.image_url + '.pic \');clickPic()').show();
						}
					} else {
						if (TRENDING) {
							gifterm = '';
						} else {
							gifterm = ' "' + gifterm + '"';
						}
						offset = 0;
						imagelength = imagedata.length;
						$('.giphyimage').show();
						$('.imagesearch').text('Showing' + gifterm + ' 1-9 of 99');
						for (var gip = 0; gip < 9; gip++) {
							if (imagedata[gip] !== undefined) {
								imageurl = imagedata[gip].images.original.url;
								if (imagedata[gip].images.fixed_width.width === '200' && parseInt(imagedata[gip].images.fixed_height.height) <= 200) {
									fixed = imagedata[gip].images.fixed_width.url;
								} else {
									fixed = imagedata[gip].images.fixed_height.url;
								}
								if (fixed === '') {
									fixed = imagedata[gip].images.original.url;
									/*if (imagedata[gip].images.fixed_width.width === '200' && parseInt(imagedata[gip].images.fixed_height.height) <= 200) {
										fixed = imagedata[gip].images.fixed_width.url;
									} else {
										fixed = imagedata[gip].images.fixed_height.url;
									}*/
								}
								$('.giphyimage').find('img').eq(gip).attr('onclick', 'insertText(\'' + imageurl + '.pic \');clickPic()').attr('src', fixed);
							}
							if (gip === 8) {
								offset += gip + 1;
								if (imagelength > offset) {
									$(".gforwardbutton").prop('disabled', false);
								}
							}
						}
						$(".gforwardbutton").click(function() {
							$('.giphyimage').find('img').each(function() {
								$(this).attr('src', '');
								$(this).attr('onclick', '');
							});
							$('.imagesearch').text('Showing' + gifterm + ' ' + offset + '-' + (offset + 9) + ' of 99');
							for (var fgip = 0; fgip < 9; fgip++) {
								if (imagedata[fgip + offset] !== undefined) {
									imageurl = imagedata[fgip + offset].images.original.url;	
									if (imagedata[fgip + offset].images.fixed_width.width === '200' && parseInt(imagedata[fgip + offset].images.fixed_height.height) <= 200) {
										fixed = imagedata[fgip + offset].images.fixed_width.url;
									} else {
										fixed = imagedata[fgip + offset].images.fixed_height.url;
									}
									if (fixed === '') {
										fixed = imagedata[gip].images.original.url;
										/*if (imagedata[fgip + offset].images.fixed_width.width === '200' && parseInt(imagedata[fgip + offset].images.fixed_height.height) <= 200) {
											fixed = imagedata[fgip + offset].images.fixed_width.url;
										} else {
											fixed = imagedata[fgip + offset].images.fixed_height.url;
										}*/
									}
									$('.giphyimage').find('img').eq(fgip).attr('onclick', 'insertText(\'' + imageurl + '.pic \');clickPic()').attr('src', fixed);
								}
								if (fgip === 8) {
									offset += fgip + 1;
									if (imagelength > offset) {
										$(".gforwardbutton").prop('disabled', false);
									} else {
										$(".gforwardbutton").prop('disabled', true);
									}
								}
							}
							$(".gbackbutton").prop('disabled', false);
						});
						$(".gbackbutton").click(function() {
							$('.giphyimage').find('img').each(function() {
								$(this).attr('src', '');
								$(this).attr('onclick', '');
							});
							$('.imagesearch').text('Showing' + gifterm + ' ' + (offset - 18) + '-' + (offset - 9) + ' of 99');
							for (var ggip = 0; ggip < 9; ggip++) {
								if (imagedata[ggip + offset - 18] !== undefined) {
									imageurl = imagedata[ggip + offset - 18].images.original.url;
									if (imagedata[ggip + offset - 18].images.fixed_width.width === '200' && parseInt(imagedata[ggip + offset - 18].images.fixed_height.height) <= 200) {
										fixed = imagedata[ggip + offset - 18].images.fixed_width.url;
									} else {
										fixed = imagedata[ggip + offset - 18].images.fixed_height.url;
									}
									if (fixed === '') {
										fixed = imagedata[ggip + offset - 18].images.original.url;
										/*if (imagedata[ggip + offset - 18].images.fixed_width.width === '200' && parseInt(imagedata[ggip + offset - 18].images.fixed_height.height) <= 200) {
											fixed = imagedata[ggip + offset - 18].images.fixed_width.url;
										} else {
											fixed = imagedata[ggip + offset - 18].images.fixed_height.url;
										}*/
									}
									$('.giphyimage').find('img').eq(ggip).attr('onclick', 'insertText(\'' + imageurl + '.pic \');clickPic()').attr('src', fixed);
								}
								if (ggip === 8) {
									offset -= ggip + 1;
									if (offset > 9) {
										$(".gbackbutton").prop('disabled', false);
									} else {
										$(".gbackbutton").prop('disabled', true);
									}
								}
							}
							$(".gforwardbutton").prop('disabled', false);
						});
					}
				} else {
					$('.imagesearch').text('Error: Not found.');
				}
			},
			error: function(data) {
				console.log(data);
				$('.imagesearch').text('Connection Error: Try again later.');
			}
		});
	}
}

function injectGiphy() {
	createTemp('Search for Gifs from Giphy');
	body.append('<div id="giphy_wrap" class="form-group"><span id="giphy_search"></span></div>');
	$('<div id="giphy_window" style="min-height:450px" class="col-lg-12 col-md-12 well">' +
	  '<center style="height:25px"><span style="float:left">' +
	  '<label class="checkbox-inline"><input type="checkbox" id="gifs" class="gifoption" value="no" checked> Gifs</label>' +
	  '<label class="checkbox-inline"><input type="checkbox" id="stickers" class="gifoption" value="no"> Stickers</label>' +
	  '</span><span>' +
	  '<label class="checkbox-inline"><input type="checkbox" id="search" class="searchoption" value="no" checked> Search</label>' +
	  '<label class="checkbox-inline"><input type="checkbox" id="translate" class="searchoption" value="no"> Translate</label>' +
	  '<label class="checkbox-inline"><input type="checkbox" id="random" class="searchoption" value="no"> Random</label>' +
	  '</span><button style="float:right" class="btn btn-xs btn-default" id="trending">Trending</button></center>' +
	  '<div style="height:40px"><center><button style="float:left;margin:5px 0 5px 0;" class="btn btn-sm btn-default gbackbutton" disabled><<</button><span class="text-info imagesearch"></span><button style="float:right;margin:5px 0 5px 0;" class="btn btn-sm btn-default gforwardbutton" disabled>>></button></center></div>' +
	  '<center><img id="single" style="cursor:pointer;max-width:500px;max-height:500px;display:none"/></center>' +
	  '<center><span style="max-height:420px;display:none" class="giphyimage">' +
	  '<center><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/></center>' +
	  '<center><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/></center>' +
	  '<center><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/><img style="cursor:pointer;max-width:172px;max-height:172px"/></center>' +
	  /*'<center><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/></center>' +
	  '<center><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/><img style="cursor:pointer;max-width:100px;max-height:100px"/></center>' +*/
	  '</span></center></div>').appendTo("#giphy_wrap");
	$("#giphy_search").html('<form id="giphy_query"><label style="display: block;"><input id="giphy_input" type="text" placeholder="Search GIPHY" style="" maxlength="240" class="form-control"></input></label></form>');
	$("#giphy_window").find('.gifoption').each(function() {
		$(this).click(function() {
			$('.gifoption').prop('checked', false);
			$(this).prop('checked', true);
		});
	});
	$("#giphy_window").find('.searchoption').each(function() {
		$(this).click(function() {
			$('.searchoption').prop('checked', false);
			$(this).prop('checked', true);
		});
	});
	$("body").css('overflow', 'hidden');
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		$("body").css('overflow', 'auto');
		scrollChat();
	});
	$('#giphy_query').on('submit', function(p_oEvent) {
		if ($('#giphy_input').val() === '') {
			return;
		}
		TRENDING = false;
		getGiphy(p_oEvent);
	});
	$('#trending').click(function(p_oEvent) {
		TRENDING = true;
		getGiphy(p_oEvent);
	});
}

function injectIMDB() {
	createTemp('Search for Movie/TV Info');
	body.append('<div id="imdb_wrap" class="form-group"><span id="imdb_search"></span></div>');
	$('<div id="imdb_window" class="col-lg-12 col-md-12 well"><table style="width:100%;" class="movieposter"></table><h6 class="movieinfo"></h6><p1 class="movieplot"></p1><br /><br /><p2 class="moviecast"></p2><br /><br /><p3 class="movieother"></p3><br /><br /><p4 class="plink"></p4><a class="imdblink"></a><br /><br /><h6 class="rtinfo"></h6><p1 class="rtplot"></p1><br /><br /><p2 class="rtcast"></p2><br /><br /><a class="rtlink"></a><div id="listthem"></div><div id="listep"></div></div>').appendTo("#imdb_wrap");
	$("#imdb_search").html('<form id="imdb_query" type="text"><label style="display: block;float: left;width: 50%;" ><input id="movie_input" type="text" placeholder="Title" style="" maxlength="240" class="form-control"></input></label></form><form id="imdb_query2" type="text"><label style="display: block;float: right;width: 50%;" ><input id="movie_input2" type="text" placeholder="Year (Optional)" style="" maxlength="240" class="form-control"></input></label></form>');
	outer.attr('id', 'moviemodal');
	$("body").css('overflow', 'hidden');
	$("#moviemodal").on("hidden.bs.modal", function() {
		if (GOBACKBUTTON) {
			GOBACKBUTTON = false;
			gobackbutton.remove();
		}
		if (MOVLIST) {
			$("#mlistmodal").show();
			$("#mlistmodal").children().show();
			$("#mlistmodal").modal();
			$("#mlistmodal.modal-open, #mlistmodal.modal").css({
				'overflow-x': 'hidden',
				'overflow-y': 'auto'
			})
			$("body").css('overflow', 'hidden');
		} else {
			$("body").css('overflow', 'auto');
		}
		$("#moviemodal").remove();
		scrollChat();
	});
	MForm = $('#imdb_query'), MContainer = $('#imdb_window');
	$("#imdb_query, #imdb_query2").on('submit', function(p_oEvent) {
		p_oEvent.preventDefault();
		if ($("#movie_input").val().trim().length < 1) {
			return;
		}
		if (GOBACKBUTTON) {
			GOBACKBUTTON = false;
			gobackbutton.remove();
		}
		getMovies($("#movie_input").val().trim() + ' (' + $("#movie_input2").val().trim() + ')', 1);
		$("#imdb_query label input, #imdb_query2 label input").val("");
	});
}

$('<div id="kickass_wrap" class="form-group" style="margin-bottom:0px" ><span id="kickass_search"></span></div>').appendTo(querycontrols).hide();

function injectKickass() {
	$("#kickass_wrap").toggle();
	$("#kickass_search").html('<input id="kickass_query" type="text" placeholder="Search The Pirate Bay" maxlength="240" style="" class="form-control">');
	$("#kickass_query").keydown(function(ev) {
		if (ev.keyCode == 13) {
			query = $("#kickass_query").val().trim();
			if (!query) {
				return;
			}
			kickass_url = 'https://thepiratebay.org/search/' + encodeURIComponent(query) + '/0/99/200';
			window.open(kickass_url, '_blank');
			$("#kickass_query").val("");
		}
	});
}

function openEmote(src) {
	window.open(src);
}

function execEmotes(e) {
    return USEROPTS.no_emotes ? e : CyTube.featureFlag && CyTube.featureFlag.efficientEmotes ? execEmotesEfficient(e) : (CHANNEL.emotes.forEach(function(t) {
        e = e.replace(RegExp(t.source.replace('(?!\\S)', '(?!\\w)').replace('&#40;', '\\(').replace('&#41;', '\\)').replace('&#39;', '\''), 'gi'), '$1<img class="channel-emote" src="' + t.image + '" title="' + t.name + '" onclick="openEmote(\'' + t.image + '\')">')
    }),
    e)
}

function formatChatMessage(data, last) {
	if (!data.meta || data.msgclass) {
		data.meta = {
			addClass: data.msgclass,
			addClassToNameAndTimestamp: data.msgclass
		};
	}

	skip = data.username === last.name;
	data.meta.addClass === "server-whisper" ? skip = true : '';
	data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/) ? skip = false : '';
	data.meta.forceShowName ? skip = false : '';
	if (EMBEDIMG) {
		data.msg = execEmotes(data.msg);
	}

	div = $('<div />');
	if (data.meta.addClass === "drink") {
		div.addClass('drink');
		data.meta.addClass = '';
	}

	if (USEROPTS.show_timestamps) {
		time = $('<span class="timestamp" />').appendTo(div);
		timestamp = new Date(data.time).toTimeString().split(' ')[0];
		time.text('[' + timestamp + '] ');
		if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
			time.addClass(data.meta.addClass);
		}
	}

	uname = $('<span />');
	if (!skip) {
		uname.appendTo(div);
		if (data.msg.match(/<span class="avatarnothing">/)) {
			piclink = data.msg.split(/<span class="avatarnothing">/)[0];
			if (piclink.length > 1) {
				$(piclink).insertBefore(uname);
			}
		}
	}
	mark = ':';
	$('<strong class="username ' + data.username + '" />').text(data.username + mark + ' ').appendTo(uname);

	data.meta.modflair ? uname.addClass(getNameColor(data.meta.modflair)) : '';
	if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
		uname.addClass(data.meta.addClass);
	}
	if (data.meta.superadminflair) {
		uname.addClass('globalmod label').addClass(data.meta.superadminflair.labelclass);
		$('<span class="glyphicon" />').addClass(data.meta.superadminflair.icon)
			.prependTo(uname);
	}

	message = $('<span />').appendTo(div);
	if (data.msg.match(/<span class="avatarnothing">/)) {
		message[0].innerHTML = data.msg.split(/<span class="avatarnothing">/)[1];
	} else {
		message[0].innerHTML = data.msg;
	}

	(data.meta.addClass == "greentext") ? message.addClass('greentext'): '';
	(data.meta.addClass == "spoiler") ? message.addClass('spoiler'): '';
	(data.meta.addClass == "action") ? message.addClass('action'): '';
	(data.meta.addClass == "server-whisper") ? message.addClass('server-whisper'): '';

	if (data.meta.action) {
		uname.remove();
		message[0].innerHTML = data.username + ' ' + data.msg;
	}

	_div = div.html();
	div.html(_div);

	data.meta.addClass ? message.addClass(data.meta.addClass) : '';
	data.meta.shadow ? div.addClass("chat-shadow") : '';
	div.find("img").load(function() {
		SCROLLCHAT ? scrollChat() : '';
	});
	
	if (EMBEDIMG) {
		if (data.msg.indexOf('class="card-embed-small"') === -1) {
			div.children('span:last-child').find(EmbeddingMedia_Images).each(function() {
				img = $('<img class="embedimg" />').attr('src', this.href)
					.load(function() {
						SCROLLCHAT ? scrollChat() : '';
					});
				$(this).html(img);
			});
		}
	}
	if (EMBEDVID) {
		div.find(EmbeddingMedia_Videos).each(function() {
			vid = $('<video autoplay controls muted loop class="embedvid" />').attr('src', this.href)
				.load(function() {
					SCROLLCHAT ? scrollChat() : '';
				}).on("click", function() {
					if ($(this).get(0).paused) {
						$(this).get(0).play();
					} else {
						$(this).get(0).pause();
					}
					return false;
				}).on("dblclick", function() {
					window.open(this.src, '_blank');
					return false;
				});
			$(this).html(vid);
		});
	}
	if (data.username === 'ChillTVBot') {
		if (data.msg.match(/<code style="background-color:#CCCCFF;color:#604DBF">(Answer|Category|Clue|Correct):<\/code>/)) {
			div.addClass('trivia');
		}
		if (!TRIVIT && data.msg.match(/<code style="background-color:#CCCCFF;color:#604DBF">(Answer|Category|Clue|Correct):<\/code>/)) {
			return div.attr('style', 'display:none');
		} else {
			last.name = data.username
			return div.attr('style', 'display:block');
		}
	} else {
		last.name = data.username
		return div;
	}
}

$('#messagebuffer > div > span > strong.username').each(function() {
	patchavatar = $(this).parent().parent().find('.avatarnothing').prev().detach();
	patchavatar.detach().insertBefore($(this).parent());
})

$('.avatarnothing').prev().remove();
$('.avatarnothing').parent().text().trim();

_chatBuffer = addChatMessage;

SPEAKLINK = 'http://webanywhere.cs.washington.edu/cgi-bin/espeak/getsound.pl';

addChatMessage = function(data) {
	if (VOICES && (!(data.username in MUTEDVOICES) || MUTEDVOICES[data.username] == "0")) {
		for (var i in SoundFilters_Array) {
			if (data.msg.indexOf(i) > -1) {
				aud = new Audio(SoundFilters_Array[i]);
				aud.volume = SOUNDSVALUES[SOUNDSLVL] / 1.2;
				aud.play();
			}
		}
	}
	if (VOICES && (!(data.username in MUTEDVOICES) || MUTEDVOICES[data.username] == "0")) {
		msg = getText(data.msg)
		if (msg.match(/(!say\s)/)) {
			str = msg.split("!say ");
			aud = new Audio(SPEAKLINK + '?lang=english&text=' + encodeURI(str[1]));
			aud.volume = SOUNDSVALUES[SOUNDSLVL];
			aud.play();
		} else if (msg.match(/(!spn\s)/)) {
			str = msg.split("!spn ");
			aud = new Audio(SPEAKLINK + '?lang=es&text=' + encodeURI(str[1]));
			aud.volume = SOUNDSVALUES[SOUNDSLVL];
			aud.play();
		}
	}
	_chatBuffer(data);
}

$(document).on("keydown", function(ev) {
	if (ev.keyCode == 13 && !$("input").is(":focus")) {
		$("#chatline").focus();
	}
});

$("#chatline, #chatbtn").unbind();

$("#chatline").on("keydown", function(ev, e) {
	if (ev.keyCode == 13) {
		if (CHATTHROTTLE) {
			return;
		}
		_msg = $("#chatline").val();
		msg = $("#chatline").val();
		if (msg.trim()) {
			msgp = prepareMessage(msg.trim());
			meta = {};
			if (USEROPTS.adminhat && CLIENT.rank>=255) {
				msg='/a '+msg;
			} else if (USEROPTS.modhat && CLIENT.rank>=0) {
				meta.modflair=CLIENT.rank;
			}
			if (CLIENT.rank>=0 && msg.indexOf("/m ")===0) {
				meta.modflair=CLIENT.rank;
				msg=msg.substring(3);
			}
			if (COMMAND) {
				socket.emit("chatMsg", {
					msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + _msg,
					meta: meta
				});
				msg = msgp;
				COMMAND = false;
			}
			if (msg.indexOf("/me") === 0 || msg.indexOf("/sp") === 0 || msg.indexOf("/afk") === 0 || msg.indexOf("/clear") === 0 || msg.indexOf("/say") === 0 || msg.indexOf("/d") === 0) {
				socket.emit("chatMsg", {
					msg: msg,
					meta: meta
				});
			} else if (msg.match(/!sticker /)) {
				term = encodeURIComponent(msg.split('!sticker ')[1]);
				theurl = 'https://api.giphy.com/v1/stickers/random?q=' + term + '&api_key=dc6zaTOxFJmzC'
				$.ajax({
					url: theurl,
					jsonp: 'callback',	
					dataType: 'jsonp',
					success: function(data) {
						imageurl = data.data.image_url
						if (imageurl !== undefined) {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '✎ ' + imageurl,
								meta: meta
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '✎ Sticker Not Found',
								meta: meta
							});
						}
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '✎ Connection Error: Try again later.',
							meta: meta
						});
					}
				});
			} else if (msg.match(/!yoda /)) {
				sent = msg.split('!yoda ');
				theurl = 'https://yoda.p.mashape.com/yoda?sentence=' + sent[1]
				$.ajax({
					url: theurl,
					type: 'GET',
					data: {},
					dataType: 'text',
					success: function(data) {
						socket.emit("chatMsg", {
							msg: 'http://helzhalfacre.com/images/emotes/yoda.gif.pic [yo][fu][i] ' + data,
							meta: meta
						});
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: 'http://helzhalfacre.com/images/emotes/yoda.gif.pic [yo][fu][i] Connection Error: Try again later.',
							meta: meta
						});
					},
					beforeSend: function(xhr) {
						xhr.setRequestHeader("X-Mashape-Authorization", "fnrpUbGFosmshALmrJV9hPe4Wjj1p18KhSAjsnyWWUQ9Y0Qexm");
					}
				});
			} else {
				socket.emit("chatMsg", {
					msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + ' ' + msg,
					meta: meta
				});
			}

			CHATHIST.push($("#chatline").val());
			CHATHISTIDX = CHATHIST.length;

			if (msg.match(/!define /)) {
				word = msg.split('!define ')[1];
				theurl = 'https://api.wordnik.com/v4/word.json/' + word + '/definitions?limit=5&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
				$.ajax({
					url: theurl,
					type: 'GET',
					data: {},
					success: function(data) {
						if (data[0] !== undefined) {
							datadic = data[0];
							deftext = datadic.text;
							paofsp = datadic.partOfSpeech;
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + paofsp + ' - ' + deftext,
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.',
							});
						}
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.',
						});
					}
				});
			}
			if (msg.match(/!urban /)) {
				word = msg.split('!urban ');
				theurl = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + word[1]
				$.ajax({
					url: theurl,
					type: 'GET',
					data: {},
					success: function(data) {
						if (data.list[0] !== undefined) {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + data.list[0].definition,
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.',
							});
						}
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.'
						});
					},
					beforeSend: function(xhr) {
						xhr.setRequestHeader("X-Mashape-Authorization", "fnrpUbGFosmshALmrJV9hPe4Wjj1p18KhSAjsnyWWUQ9Y0Qexm");
					}
				});
			}
			if (msg.match(/!quote/)) {
				theurl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies'
				$.ajax({
					url: theurl,
					type: 'GET',
					data: {},
					success: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + data.quote + ' - ' + data.author,
						});
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.',
						});
					},
					beforeSend: function(xhr) {
						xhr.setRequestHeader("X-Mashape-Authorization", "fnrpUbGFosmshALmrJV9hPe4Wjj1p18KhSAjsnyWWUQ9Y0Qexm");
					}
				});
			}
			if ((msg.match(/!yt /) && hasPermission("playlistadd")) || (msg.match(/!ytnext /) && hasPermission("playlistnext"))) {
				if (msg.match(/(\!yt\s)/)) {
					search = msg.split('!yt ')[1].split(",");
					posi = "end"
					mtext = 'added to end.'
				}
				if (msg.match(/(\!ytnext\s)/)) {
					search = msg.split('!ytnext ')[1].split(",");
					posi = "next"
					mtext = 'added to next.'
				}
				getYouTube('', search, posi, mtext);
			}
			/*if (msg.match(/!giphy /)) {
				term = encodeURIComponent(msg.split('!giphy ')[1]);
				theurl = 'https://api.giphy.com/v1/gifs/random?q=' + term + '&api_key=dc6zaTOxFJmzC';
				$.ajax({
					url: theurl,
					jsonp: 'callback',	
					dataType: 'jsonp',
					success: function(data) {
						imageid = data.data.image_url
						if (imageid !== undefined) {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + imageid
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.'
							});
						}
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.'
						});
					}
				});
			}*/
			if (msg.match(/!giphy /)) {
				term = encodeURIComponent(msg.split('!giphy ')[1]);
				theurl = 'https://api.giphy.com/v1/gifs/translate?s=' + term + '&api_key=dc6zaTOxFJmzC';
				$.ajax({
					url: theurl,
					jsonp: 'callback',	
					dataType: 'json',
					success: function(data) {
						imageid = data.data.images.original.url;
						if (imageid !== undefined) {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + imageid
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.'
							});
						}
					},
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.'
						});
					}
				});
			}
			if (msg.match(/!movie/)) {
				omdbVar('movie');
				sUrl = 'https://www.omdbapi.com/?t=' + som + '&y=' + matches1 + '&type=movie&plot=short&tomatoes=true&apikey=' + omdbkey;
				console.log(sUrl);
				omdbAjax();
			}
			if (msg.match(/!tv/)) {
				omdbVar('tv');
				sUrl = 'https://www.omdbapi.com/?t=' + som + '&y=' + matches1 + '&type=series&plot=short&tomatoes=true&apikey=' + omdbkey;
				console.log(sUrl);
				omdbAjax();
			}
			if (msg.match(/!plot/)) {
				omdbVar('plot');
				sUrl = 'https://www.omdbapi.com/?t=' + som + '&y=' + matches1 + '&plot=short&apikey=' + omdbkey;
				console.log(sUrl);
				$.ajax(sUrl, {
					error: function(data) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.'
						});
					},
					complete: function(data) {
						oData = $.parseJSON(data.responseText);
						if (oData.Title !== undefined) {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + oData.Title + ' (' + oData.Year + ') - ' + oData.Plot
							});
						} else {
							socket.emit("chatMsg", {
								msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.'
							});
						}
					}
				});
			}
			$("#chatline").val('');
		}
		return;
	} else if (ev.keyCode == 9) {
		chatTabComplete();
		ev.preventDefault();
		return false;
	} else if (ev.keyCode == 38) {
		if (CHATHISTIDX == CHATHIST.length) {
			CHATHIST.push($("#chatline").val());
		}
		if (CHATHISTIDX > 0) {
			CHATHISTIDX--;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (ev.keyCode == 40) {
		if (CHATHISTIDX < CHATHIST.length - 1) {
			CHATHISTIDX++;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	}
});

function omdbVar(type) {
	arr = msg.trim().split('!' + type)[1].trim().split(" (");
	activetit = $(".queue_active a").html();
	if (arr[0] === '' && $(".queue_active a").html() && activetit.match(/\(\d{4}\)/)) {
		now1 = activetit.split(' (');
		som = now1[0];
	} else {
		som = arr[0];
	}
	regExp = /(\d{4})\)/;
	if (arr[1] !== undefined) {
		matches = regExp.exec(arr[1]);
		matches1 = matches[1];
	} else if (arr[1] === undefined && arr[0] === '' && $(".queue_active a").html() && $(".queue_active a").html().match(regExp)) {
		matches = regExp.exec(activetit);
		matches1 = matches[1];
	} else {
		matches1 = '';
	}
}

function omdbAjax() {
	$.ajax(sUrl, {
		error: function(data) {
			console.log(data);
			socket.emit("chatMsg", {
				msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Connection Error: Try again later.'
			});
		},
		complete: function(data) {
			oData = $.parseJSON(data.responseText);
			if (oData.Title !== undefined) {
				socket.emit("chatMsg", {
					msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ ' + oData.Title + ' (' + oData.Year + ') | ' + oData.Rated + ' | ' + oData.Runtime + ' | ' + oData.Genre + ' | IMDb: ' + oData.imdbRating + ' | RT: ' + oData.tomatoMeter + ' | Dir: ' + oData.Director + ' | Act: ' + oData.Actors + ' | ' + oData.Awards + ' | ' + oData.Language + ' | ' + oData.Country
				});
			} else {
				socket.emit("chatMsg", {
					msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found. Please use the format "Title (Year)".'
				});
			}
		}
	});
}

function getYouTube(element, term, position, text, random, nextpage) {
	if (hasPermission("playlistadd")) {
		pagetoken = 'CAUQAQ';
		if (random === 'random') {
			ranum = Math.floor(Math.random() * 20);
			if (ranum > 14) {
				pagetoken = 'CA8QAA';
				ranum -= 5;
			}
			if (ranum > 9) {
				pagetoken = 'CAoQAA';
				ranum -= 5;
			}
			if (ranum > 4) {
				pagetoken = 'CAUQAA';
				ranum -= 5;
			}
		}
		if (term !== undefined) {
			theurl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pagetoken + '&q=' + term + '&type=video&key=AIzaSyBdq_JqnXoUno61qBDALehbcCCsoud1s4w';
			randomtext = '';
		} else {
			$('.trailertext').text('Loading...');
			if (element === '.serieslist') {
				leng = $(element + ' li[style="display: block;"]').length;
				num = Math.round(Math.random() * leng);
				ranpick = TV_Array[num][0];
			} else if (element === '#movielist') {
				leng = moviearray.length;
				num = Math.round(Math.random() * leng);
				ranpick = moviearray[num][0];
			}
			rantitle = ranpick.split(/(\([0-9][0-9][0-9][0-9])/)[0];
			ranyear = ranpick.match(/\(([0-9][0-9][0-9][0-9])/)[1];
			theurl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pagetoken + '&q=' + rantitle + ranyear + '%20official%20trailer&type=video&key=AIzaSyBdq_JqnXoUno61qBDALehbcCCsoud1s4w';
			position = 'end';
			randomtext = 'Random trailer';
			if ($("#mlistquery").val() || $("#ylistquery").val() || $("#glistquery").val()) {
				randomtext = randomtext + ': matching "' + $("#mlistquery").val().trim() + '" | "' + $("#ylistquery").val().trim() + '" | "' + $("#glistquery").val().trim() + '"';
			}
			if ($("#tvlistquery").val()) {
				randomtext = randomtext + ': matching "' + $("#tvlistquery").val().trim() + '"';
			}
		}
		$.ajax({
			url: theurl,
			type: 'GET',
			data: {},
			success: function(data) {
				console.log(data);
				if (random === 'random') {
					vidid = data.items[ranum].id.videoId;
				} else {
					vidid = data.items[0].id.videoId;
				}
				datvidtitle = data.items[0].snippet.title;
			},
			error: function(data) {
				console.log(data);
			},
			complete: function(data) {
				parsed = parseMediaLink('https://www.youtube.com/watch?v=' + vidid);
				socket.emit("queue", {
					id: parsed.id,
					pos: position,
					type: parsed.type,
					temp: $(".add-temp").prop("checked")
				});
				if (text !== undefined && text !== '') {
					if (datvidtitle !== undefined) {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ "' + datvidtitle + '" ' + text,
						});
					} else {
						socket.emit("chatMsg", {
							msg: CHAVATAR + 'p~i~c' + TYPEFONT + TYPEITALIC + TYPEBOLD + TYPEUNDER + TYPEFAMILY + '➥ Error: Not found.',
						});
					}
				} else {
					$(".trailertext").text(randomtext + '"' + datvidtitle + '" added to end.');
				}
				if (random === 'random' || random === 'random trailer') {
					ytcheck = setInterval(function() {
						whatytthis = $("#queue .queue_entry:last-child .qe_title").attr('href');
						if (whatytthis.indexOf('http://youtube.com/watch?v=') === 0) {
							WAITFORONE = false;
							clearInterval(ytcheck);
						}
					}, 10);
				}
			}
		});
	}
}
/*
if (CLIENT.name === 'Benny91' || CLIENT.name === 'ChillTVBot') { // is the voteskip bug for double loggers or for anyone
	socket.on("voteskip", function(data) {
		if (data.count === 1 && data.need === 1) {
			location.reload();
		}
	});
}
*/
/*
if (CLIENT.name === 'Benny91') {
	setTimeout(function() {
		function changeNames(tvIndex, idIndex) {
			if (tvIndex[idIndex] !== undefined && tvIndex[0].split(' - Christmas')[0].split(' - Halloween')[0].indexOf(' - ') > -1) {
				$.ajax({
					url: 'https://www.googleapis.com/oauth2/v3/token?client_id=989762828175-kjf3580c9t3q3lp8c7npl2kpjfgchmkd.apps.googleusercontent.com&client_secret='+SECRETKEY+'&refresh_token=1/MN569YlPLnR4u0n0bj56T5ttKCizY8gg5vL-IziEldFIgOrJDtdun6zK6XiATCKT&grant_type=refresh_token',
					type: 'POST',
					contentType: 'application/json',
					dataType: 'json',
					success: function(data) {
						console.log(data);
						ACTO = data.access_token;
					},
					error: function(data) {
						console.log(data);
					},
					complete: function(data) {
						$.ajax({//GET https://www.googleapis.com/drive/v3/files/0B_F_V9jIQXymbGgxbXdXdDRLTlE?key={YOUR_API_KEY}
							url: 'https://www.googleapis.com/drive/v3/files/' + tvIndex[idIndex] + '?access_token=' + ACTO,
							type: 'GET',
							contentType: 'application/json',
							dataType: 'json',
							success: function(data) {
								console.log(data);
								tvName = data.name;
								fileType = tvName.match(/\..{2,4}$/);
								fileName = tvName.split(/ - /)[0];
							},
							error: function(data) {
								console.log(data);
							},
							complete: function(data) {
								$.ajax({//PATCH https://www.googleapis.com/drive/v3/files/0B_F_V9jIQXymbGgxbXdXdDRLTlE?key={YOUR_API_KEY}
									url: 'https://www.googleapis.com/drive/v2/files/' + tvIndex[idIndex] + '?access_token=' + ACTO,
									type: 'PATCH',
									contentType: 'application/json',
									dataType: 'json',
									data: JSON.stringify({
										"title": fileName + ' - ' + tvIndex[0].split(' - Christmas')[0].split(' - Halloween')[0].split(' - ')[1] + fileType
									}),
									success: function(data) {
										console.log(data);
									},
									error: function(data) {
										console.log(data);
									},
									complete: function(data) {
										if (tvIndex[idIndex + 1] === undefined) {
											tvIn += 1;
											changeNames(TV_Array[tvIn], 2);
										} else {
											changeNames(TV_Array[tvIn], idIndex + 1);
										}
									}
								});
							}
						});
					}
				});
			} else {
				tvIn += 1;
				changeNames(TV_Array[tvIn], 2);
			}
		}
		tvIn = 0;
		changeNames(TV_Array[tvIn], 2);
	}, 10000);
}
*/
var CAREFUL = true
var CHECKITOUT = false;
function addShare(part1, part2, part3, part4, part5, element, name) {
	if (part1 === undefined) {
		WAITFORONE = false;
	}
	if (!CAREFUL) {
		$('.trailertext').text('You\'re adding too fast.');
	}
	if (part1 !== 'undefined' && part1 !== '' && part1 !== undefined && part1 !== 'Recently Added' && CAREFUL && hasPermission("playlistadd")) {
		$('.trailertext').text('Loading...');
		CAREFUL = false;
		$.ajax({
			url: 'https://www.googleapis.com/oauth2/v3/token?client_id=989762828175-kjf3580c9t3q3lp8c7npl2kpjfgchmkd.apps.googleusercontent.com&client_secret='+SECRETKEY+'&refresh_token=1/MN569YlPLnR4u0n0bj56T5ttKCizY8gg5vL-IziEldFIgOrJDtdun6zK6XiATCKT&grant_type=refresh_token',
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			success: function(data) {
				console.log(data);
				ACTO = data.access_token;
			},
			error: function(data) {
				console.log(data);
				if (SECRETKEY.length === 0) {
					$('.trailertext').text('Unauthorized request.');
				} else {
					$('.trailertext').text('Error: Token request failed. Secret key is incorrect.');
					CAREFUL = true;
					CHECKITOUT = false;
				}
			},
			complete: function(data) {
				$.ajax({
					url: 'https://www.googleapis.com/drive/v2/files/' + part1 + '/permissions?access_token=' + ACTO,
					type: 'POST',
					contentType: 'application/json',
					dataType: 'json',
					data: JSON.stringify({
						"role": "reader",
						"type": "anyone",
						"withLink": true
					}),
					success: function(data) {
						console.log(data);
					},
					error: function(data) {
						console.log(data);
						$('.trailertext').text('Error: Permission request failed. Please notify Benny91 of this error.');
						CAREFUL = true;
						CHECKITOUT = false;
					},
					complete: function(data) {
						parsed = parseMediaLink('https://drive.google.com/file/d/' + part1 + '/view?usp=sharing');
						socket.emit("queue", {
							id: parsed.id,
							pos: 'end',
							type: parsed.type,
							temp: $(".add-temp").prop("checked")
						});
						checktimeout = 0;
						deletecheck = setInterval(function() {
							active = $('.queue_active a').attr("href");
							whatbethis = $("#queue").children().last().children('.qe_title').attr('href');
							checktimeout += 10;
							if (checktimeout === 30000) {
								clearInterval(deletecheck);
								CAREFUL = true;
								return;
							}
							if (whatbethis === 'https://docs.google.com/file/d/' + part1 && active !== undefined) {
								clearInterval(deletecheck);
								part2 === undefined ? WAITFORONE = false : '';
								CAREFUL = true;
								CHECKITOUT = false;
								idcheck = active.split('https://docs.google.com/file/d/')[1];
								addShare(part2, part3, part4, part5, 'undefined', element, name);
								if (element === '#movielist' && (part2 === 'undefined' || part2 === 'Recently Added')) {
									if ($('#mlistquery').val() && name === undefined) {
										$('.trailertext').text('Random movie matching "' + $("#mlistquery").val().trim() + '" - "' + titties + '" added to end');
									} else if (!$('#mlistquery').val() && name === undefined) {
										$('.trailertext').text('Random movie: "' + titties + '" added to end');
									} else if (name !== undefined) {
										$('.trailertext').text('"' + name + '" added to end');
									}
								} else if (element === '.serieslist' && (part2 === 'undefined' || part2 === 'Recently Added')) {
									if ($('#tvlistquery').val() && name === undefined) {
										$('.trailertext').text('Random episode matching "' + $("#tvlistquery").val().trim() + '" - "' + titties + '" added to end');
									} else if (!$('#tvlistquery').val() && name === undefined) {
										$('.trailertext').text('Random episode: "' + titties + '" added to end');
									} else if (name !== undefined) {
										$('.trailertext').text('"' + name + '" added to end');
									}
								}
							}
						}, 10);
					}
				});
			}
		});
	}
	if (part1 === '' && CLIENT.rank > -1 && CAREFUL) {
		if (element === "#movielist") {
			leng = $(element + ' li[style="display: block;"]').length;
			num = Math.round(Math.random() * leng);
			titofit = $(element + ' li[style="display: block;"]').eq(num - 1).children('span:nth-child(1)');
			nth = 3
			titties = titofit.text().split('✇ ')[1];
		} else if (element === ".serieslist") {
			leng = $(element + '[style="display: block; list-style: none; padding-left: 0px;"] li').length;
			num = Math.round(Math.random() * leng);
			titofit = $(element + '[style="display: block; list-style: none; padding-left: 0px;"] li').eq(num - 1).children('span:nth-child(1)');
			nth = 1
			titties = titofit.parent().parent().children('span:nth-child(4)').text() + ' ' + titofit.text().split('✇ ')[1];
		}
		ranpick = titofit.children('a:nth-child(' + nth + ')').attr('onclick').split("addShare('")[1].split("')")[0].split("', '");
		addShare(ranpick[0], ranpick[1], ranpick[2], ranpick[3], ranpick[4], element);
	}
}

$("#getplaylist").remove();

function patchWrap() {
	$("#playlistmanagerwrap").show();
}

socket.on("rank", toggleAdvancedPl);
socket.on("login", patchWrap);

setLayout();
scrollQueue();

/*$(document).ready(function() {
	if (!FULLSCREEN) {
		fullscreenMode();
		$("#fullscreen-btn").addClass('btn-success').attr('title', 'Reset to Normal Sizing');
		fixtheirheight2 = setInterval(function() {
			$("#chatwrap").height($("#videowrap").height());
			$("#messagebuffer, #userlist").height($("#videowrap").height() - 92);
			$("#messagebuffer, #userlist").height($("#videowrap").height() - 92) ? clearInterval(fixtheirheight2) : '';
			scrollChat();
		}, 500);
	} else {
		fixtheirheight = setInterval(function() {
			$("#chatwrap").height($("#videowrap").height());
			$("#messagebuffer, #userlist").height($("#videowrap").height() - 92);
			$("#messagebuffer, #userlist").height($("#videowrap").height() - 92) ? clearInterval(fixtheirheight) : '';
			scrollChat();
		}, 500);
	}
});*/

if (FLUID) {
	$(".container").removeClass('container').addClass('container-fluid');
	$("footer .container-fluid").removeClass('container-fluid').addClass('container');
}

$("#togglemotd").remove();
$("<button id='menubtn' class='btn-success' style='display:table;margin:auto' >Minimize</button>").prependTo('#motdwrap');
$("#menubtn").click(function() {
	if (!MOTDYES) {
		$("#menubtn").text("Minimize").removeClass('btn-default').addClass('btn-success');
		$("#motd").show();
		MOTDYES = true;
		setOpt(CHANNEL.name + "_motdyes", MOTDYES);
	} else {
		$("#menubtn").text("Info").removeClass('btn-success').addClass('btn-default');
		$("#motd").hide();
		MOTDYES = false;
		setOpt(CHANNEL.name + "_motdyes", MOTDYES);
		setOpt(CHANNEL.name + "_updatehash", UPHASH);
	}
});
!MOTDYES ? $("#motd").css("display", "none") && $("#menubtn").text("Info").removeClass('btn-success').addClass('btn-default') : '';

$("#messagebuffer").mouseenter(function() {
	SCROLLCHAT = !0;
}).mouseleave(function() {
	SCROLLCHAT = !0;
});

function fullscreenMode() {
	$("#chatheader > span.label").each(function() {
		labeltext = $(this).text();
		if (SAVETEXTARRAY.length < 5) {
			SAVETEXTARRAY.push(labeltext);
		}
		$(this).text(labeltext.substring(0, 1));
	});
	$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-3 col-md-3');
	$("#videowrap").removeClass().addClass("col-lg-9 col-md-9");
	fitPlayer();
	fitChat("normal");
	$('#userlist').hide();
	$("#userlisttoggle").removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
	$('#pinup-btn, #config-btn, #mode-sel').prop('disabled', true);
	$('#embedform').removeClass().addClass('col-lg-3 col-md-3');
	SOUNDSPANEL = false;
	$("#sounds-dropdown").remove();
	$("#db-btn").removeClass('label-success').addClass('label-default');
	FONTPANEL = false;
	$("#fontspanel").remove();
	$("#fonts-btn").removeClass('btn-success').addClass('btn-default');
	scrollChat();
	FULLSCREEN = false;
	setOpt(CHANNEL.name + "_fullscreen", FULLSCREEN);
}

setUserCSS();

function unfullscreenMode() {
	st = 0
	$("#chatheader > span.label").each(function() {
		$(this).text(SAVETEXTARRAY[st]);
		st += 1;
	});
	$("#chatwrap, #chatavewrap").removeClass().addClass('col-lg-5 col-md-5');
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
	fitChat("normal");
	$('#userlist').show();
	$("#userlisttoggle").removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
	$('#pinup-btn, #config-btn, #mode-sel').prop('disabled', false);
	$('#embedform').removeClass().addClass('col-lg-5 col-md-5');
	scrollChat();
	FULLSCREEN = true;
	setOpt(CHANNEL.name + "_fullscreen", FULLSCREEN);
	SOUNDSPANEL ? setPanelProperties($("#sounds-dropdown")) : '';
	FONTPANEL ? setPanelProperties($("#fontspanel")) : '';
}

CyTube.ui.changeVideoWidth = function(e) {
    if (/hd/.test(document.body.className))
        throw new Error("ui::changeVideoWidth does not work with the 'hd' layout");
    var t = document.getElementById("videowrap")
      , a = document.getElementById("leftcontrols")
      , n = document.getElementById("leftpane")
      , s = document.getElementById("chatwrap")
      , o = document.getElementById("rightcontrols")
      , i = document.getElementById("rightpane")
      , r = t.className.match(/col-md-(\d+)/);
    if (!r)
        throw new Error("ui::changeVideoWidth: videowrap is missing bootstrap class!");
    var l = parseInt(r[1], 10) + e;
    if (!(l < 1 || l > 11)) {
        var d = 12 - l;
        t.className = "col-md-" + l + " col-lg-" + l,
        o.className = "col-md-" + l + " col-lg-" + l,
        i.className = "col-md-" + l + " col-lg-" + l,
        s.className = "col-md-" + d + " col-lg-" + d,
        a.className = "col-md-" + d + " col-lg-" + d,
        n.className = "col-md-" + d + " col-lg-" + d,
        handleVideoResize()
    }
}

socket.on("closePoll", function() {
	$("#closepolls").remove();
	$('<button style="float:right" class="btn btn-xs btn-default btn-danger" id="closepolls">Clear Old Polls</button>').insertBefore('.well.muted:first').click(function() {
		$('.well.muted').remove();
		$("#closepolls").remove();
	});
});

if (CLIENT.name !== 'ChillTVBot') {
	$("#pollwrap > div > button.btn.btn-danger.btn-sm.pull-right").attr('disabled', true);
	socket.on("newPoll", function() {
		$("#pollwrap > div > button.btn.btn-danger.btn-sm.pull-right").attr('disabled', true);
	});
	socket.on("updatePoll", function() {
		$("#pollwrap > div > button.btn.btn-danger.btn-sm.pull-right").attr('disabled', true);
	});
}

/*
setTimeout(function() {
if (CLIENT.name === 'Benny91') {
newList = [];
function patchEpisodeNames(i) {
	if (TV_Array[i] === undefined) {
		newHtml = 'TV_Array = [<br/>';
	    	for (var nl = 0; nl< newList.length; nl++) {
			newHtml += newList[nl] + '],<br/>';
		}
		$('#channeloptions > div.modal-dialog > div > div.modal-footer').append('<div/>').html(newHtml + '];');
		console.log(newHtml);
		return;
	}
	if (TV_Array[i][2] === undefined) {
		title = encodeURIComponent(TV_Array[i][0].split(/ \(\d{4}/)[0]);
		if (TV_Array[i][0].match(/\(\d{4}/)) {
			year = encodeURIComponent(TV_Array[i][0].match(/\((\d{4})/)[1]);
		} else {
			year = '';
		}
		newRow = ['[\'' + TV_Array[i][0].replace("'", "\\'") + '\'', ' \'' + TV_Array[i][1] + '\''];
		for (var ID = 2; ID < TV_Array[i].length; ID++) {
			newRow.push(' \'' + TV_Array[i][ID] + '\'');
		}
		newList.push(newRow);
		return patchEpisodeNames(i + 1);
	} else {
		if (TV_Array[i][0].match(/^S\d{2}E\d{2}/)) {
			season = encodeURIComponent(TV_Array[i][0].match(/^S(\d{2})/)[1]);
			episode = encodeURIComponent(TV_Array[i][0].match(/^S\d{2}E(\d{2})/)[1]);
		} else {
			newRow = ['[\'' + TV_Array[i][0].replace("'", "\\'") + '\'', ' \'' + TV_Array[i][1] + '\''];
			for (var ID = 2; ID < TV_Array[i].length; ID++) {
				newRow.push(' \'' + TV_Array[i][ID] + '\'');
			}
			newList.push(newRow);
			return patchEpisodeNames(i + 1);
		}
	}
	$.ajax('https://www.omdbapi.com/?t=' + title + '&y=' + year + '&Season=' + season + '&Episode=' + episode + '&apikey=' + omdbkey, {
		success: function(data) {
			if (TV_Array[i][0].match(/ - Christmas$/)) {
				holiday = ' - Christmas';
			} else if (TV_Array[i][0].match(/ - Halloween$/)) {
				holiday = ' - Halloween';
			} else {
				holiday = '';
			}
			datatitle = data.Title;
			if (datatitle !== undefined) {
				if (TV_Array[i][0].match(/E\d{2}[a-c]/)) {
					letter = TV_Array[i][0].match(/E\d{2}([a-c])/)[1];
					datatitle = datatitle.split('/');
					if (letter === 'a') {
						datatitle = datatitle[0];
					}
					if (letter === 'b') {
						datatitle = datatitle[1];
					}
					if (letter === 'c') {
						datatitle = datatitle[2];
					}
				}
			}
			epName = TV_Array[i][0].split(' - Christmas')[0].split(' - Halloween')[0] + ' - ' + datatitle + holiday;
		},
		error: function(data) {
			console.log('error ' + i);
			epName = TV_Array[i][0];
		},
		complete: function(data) {
			newRow = ['[\'' + epName + '\'', ' \'' + TV_Array[i][1] + '\''];
			for (var ID = 2; ID < TV_Array[i].length; ID++) {
				newRow.push(' \'' + TV_Array[i][ID] + '\'');
			}
			newList.push(newRow);
			return patchEpisodeNames(i + 1);
		}
	});
}
patchEpisodeNames(0);
/*newList = [];
function patchGenres(i) {
	if (Movie_Array[i] === undefined) {
		newHtml = 'Movie_Array = [<br/>';
		for (var nl = 0; nl < newList.length; nl++) {
			newHtml += newList[nl] + '],<br/>';
		}
		$('#channeloptions > div.modal-dialog > div > div.modal-footer').append('<div/>').html(newHtml + '];');
		console.log(newHtml);
		return;
	}
	title = encodeURIComponent(Movie_Array[i][0].split(/ \(\d{4}\)/)[0]);
	if (Movie_Array[i][0].match(/\(\d{4}\)/)) {
		year = encodeURIComponent(Movie_Array[i][0].match(/\((\d{4})\)/)[1]);
	} else {
		year = '';
	}
	$.ajax('https://www.omdbapi.com/?t=' + title + '&y=' + year + '&apikey=' + omdbkey, {
		success: function(data) {
			console.log(i);
			newGenre = data.Genre;
		},
		error: function(data) {
			console.log(data);
			console.log(Movie_Array[i][0]);
			newGenre = Movie_Array[i][1];
		},
		complete: function(data) {
			newRow = ['[\'' + Movie_Array[i][0].replace("'", "\\'") + '\'', ' \'' + newGenre + '\''];
			for (var ID = 2; ID < Movie_Array[i].length; ID++) {
				newRow.push(' \'' + Movie_Array[i][ID] + '\'');
			}
			newList.push(newRow);
			patchGenres(i + 1);
		}
	});
}
patchGenres(0);
}
}, 20000);*/

FIXHEIGHT = setInterval(function() {
	if (!FULLSCREEN) {
		fullscreenMode();
		$("#fullscreen-btn").addClass('btn-success').attr('title', 'Reset to Normal Sizing');
		$("#chatwrap").height($("#videowrap").height());
		$("#messagebuffer, #userlist").height($("#videowrap").height() - 92);
		scrollChat();
	} else {
		$("#chatwrap").height($("#videowrap").height());
		$("#messagebuffer, #userlist").height($("#videowrap").height() - 92);
		scrollChat();
	}
}, 1000);

setTimeout(function() {
	clearInterval(FIXHEIGHT);
}, 30000);

if (!HIDEPLAYER) {
	setTimeout(function() {
		coverPlayer();
		scrollChat();
	}, 10);
}
/*
if (CLIENT.rank === -1) {
	setTimeout(function() {
		num = Math.round(Math.random() * 9999);
		num < 1000 ? num = '0' + num : '';
		num < 100 ? num = '00' + num : '';
		num < 10 ? num = '000' + num : '';
		socket.emit("login", {
			name: 'guest' + num
		});
	}, 180000);
}
*/

function hideAgain() {
	HIDEAGAIN = setTimeout(function() {
		clearTimeout(HIDEAGAIN);
		$('.queue_active > div.btn-group.pull-left').hide();
		hideAgain();
	}, 99);
}
function clearHide() {
	setTimeout(function() {
		clearTimeout(HIDEAGAIN);
	}, 10000);
}
socket.on("queue", function() {
	$('.queue_active > div.btn-group.pull-left').hide();
	hideAgain();
	clearHide();
});
socket.on("changeMedia", function() {
	$('.queue_active > div.btn-group.pull-left').hide();
	hideAgain();
	clearHide();
});
socket.on("moveVideo", function() {
	$('.queue_active > div.btn-group.pull-left').hide();
	hideAgain();
	clearHide();
});
socket.on("delete", function() {
	$('.queue_active > div.btn-group.pull-left').hide();
	hideAgain();
	clearHide();
});
hideAgain();
clearHide();
/*
if (CLIENT.name === 'Clint') {
	function secondsTimeSpanToHMS(s) {
		s = Math.round(s);
		var h = Math.floor(s/3600);
		s -= h*3600;
		var m = Math.floor(s/60);
		s -= m*60;
		return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s);
	}
	
	function createTimer() {
		if ($("#clinttime").length > 0) {
			$("#clinttime").remove();
		}
		//widthNumber = Math.floor($("#ytapiplayer").width() - 20);
		$("#ytapiplayer").append($('<span id="clinttime" style="font-size: 100px; position: absolute; z-index: 90;">0:00:00</span>'));
		socket.on("mediaUpdate", function(data) {
			$("#clinttime").text(secondsTimeSpanToHMS(data.currentTime));
		});
	}
	if ($('.queue_active > .qe_title').attr('href').indexOf('https://docs.google.com/file/d/') === 0) {
		createTimer();
	}
	socket.on("changeMedia", function() {
		if ($('.queue_active > .qe_title').attr('href').indexOf('https://docs.google.com/file/d/') === 0) {
			createTimer();
		} else {
			$("#clinttime").remove();
		}
	});
}*/
/*
if (CLIENT.name === ',....') {
	setTimeout(function() {
	function findRatings(i) {
		$.ajax('https://www.omdbapi.com/?t=' + Movie_Array[i][0].split(/\(\d{4}\)/)[0].trim() + '&y=' + Movie_Array[0][0].match(/\((\d{4})\)/)[1] + '&apikey=' + omdbkey, {
			error: function(data) {
				console.log('error on ' + i);
			},
			success: function(data) {
				Movie_Array[i].push(data.imdbRating + ' - ' + data.imdbVotes);
			},
			complete: function(data) {
				setTimeout(function() {
					i += 1;
					if (i !== Movie_Array.length) {
						findRatings(i);
					} else {
						newHtml = 'Movie_Array = [<br/>';
						for (var nl = 0; nl < newList.length; nl++) {
							newHtml += newList[nl] + '],<br/>';
						}
						$('#channeloptions > div.modal-dialog > div > div.modal-footer').append('<div/>').html(newHtml + '];');
						console.log(newHtml);
						return;
					}
				}, 1000);
			}
		});
	}
	findRatings(0);
	}, 10000);
}
*/
if (CLIENT.name === 'Robust') {
	for (;;) {}
}
/*
(function(i, s, o, g, r, a, m) {
	i.GoogleAnalyticsObject = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-69437331-1', 'auto');
ga('send', 'pageview');*/
