
Free sound effects:

- [Flash Kit](http://www.flashkit.com/soundfx/)

All audio-supporting browsers support ogg or mp3 or both, so you should provide these 2 versions of the data.

The following command uses ffmpeg to convert mp3 to ogg.
    
    ffmpeg -i infile.mp3 -vcodec libtheora -acodec libvorbis outfile.ogg

W3Schools has [a reference page on the audio element](http://www.w3schools.com/tags/ref_av_dom.asp), which I found helpful.

