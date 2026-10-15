document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    
"hii, jave! welcome to this little website i made for u",
"first of all, makasih yaa udah mau buka website ini.",
"jujur aku ngga tahu ini bakal kelihatan sweet, random, atau malah alay. but well, at least i tried something new HAHAHA.",
"sebenernya aku cuma pengen bikin sesuatu yang sedikit berbeda dari biasanya, something small but made with a little thought.",
"oh iya, website ini sebenernya lebih bagus kalau dibuka lewat laptop, btw.",
"tapi aku punya feeling kalau kamu malah bukanya lewat hp. didn't u?",
"it's okay kok, dibuka lewat hp juga tetap bisa. cuma mungkin tampilannya bakal lebih maksimal kalau kamu buka lewat laptop.",
"jadi kalau suatu saat kamu lagi buka laptop, feel free to visit this little website again, hehe.",
"okay, enough about the website. sekarang aku mau bilang sesuatu.",
"thank you for being around, jave. makasih udah jadi bagian kecil dari hari-hariku akhir-akhir ini.",
"aku seneng bisa kenal kamu, ngobrol sama kamu, dan berbagi cerita tentang hal-hal kecil yang mungkin ngga selalu bisa aku ceritain ke semua orang.",
"thank you for being someone who makes me see things from a different perspective, for helping me understand things i might never have considered on my own.",
"and somehow, through all our conversations and little moments, i've learned to appreciate little things a bit more, including myself.",
"aku ngga tahu apakah kamu sadar atau ngga, but your presence has taught me that sometimes, people can make a difference in our lives without even realizing they're doing it.",
"aku cuma merasa kalau seseorang udah melakukan hal-hal baik buat kita, rasanya menyenangkan kalau kita juga bisa menunjukkan appreciation dengan cara kita sendiri.",
"so yeah, here's my little way of saying thank you, without having to explain everything in person because honestly, that would be a little embarrassing for me",
"i don't know what the future holds, and i guess we don't really have to figure everything out right now.",
"maybe we'll stay the way we are, maybe things will change, or maybe life has something else planned for us. and i think that's okay.",
"semoga hari-harimu selalu punya hal baik buat disyukuri, semoga semua urusanmu dilancarkan, and please don't forget to take care of yourself too.",
"and if someday life takes us in different directions and we become strangers again, seperti yang pernah aku bilang, ketika namaku terlintas di pikiranmu, i hope at least one good thing i've done comes to your mind too, no matter how small it was.",
"aku ngga berharap kamu selalu mengingatku atau mengingat semua hal tentang kita, but if you ever do, i hope you'll remember me with a little smile, knowing that at some point, i was someone who brought something good into your life.",
"because even if someday we become nothing more than two people who once knew each other, i hope there's at least one little thing about me worth remembering, sekecil apa pun kebaikan yang pernah aku lakukan untukmu.",
"i don't need to be someone you'll remember forever, but if you happen to remember me, i hope it's for something good. and honestly, i think that's more than enough. ♡",
"thank you for reading all of this, jave. i hope this little website makes you smile, even just a little.",
"and if you think this is cheesy, yaudah sih, yang penting niatnya baik. HAHAHAHA.",
"okay, that's all! enjoy the song, enjoy the flowers, and have a good day. take care, jave"

];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);