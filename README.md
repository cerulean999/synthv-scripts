# synthv-scripts

Here is my collection of Synthesizer V scripts - please let me know if there are any issues or requests.

## All Notes 1 Pitch
This is really useful when making harmony tracks that are following the chord structure or something other than the main melody. It puts all the notes on the same pitch so it's easier to grab and manipulate several of them at a time. 

Scope: Group

How it works: Grabs the pitch (eg C3, not the pitch bending) of the first note in the group and sets all the rest of the notes to that same pitch. 

## Freeze Phonemes
I made this one for when I'm making a track using "extract notes from audio" a lot of times the lyric detection is wrong, but there's still something interesting happening with the phonemes. I wanted to be able to enter the real lyrics and decide later if I wanted to keep the phenomes or use the ones from the lyrics. 

Scope: Selection

How it works: Adds a space to the end of all lyrics so the phonemes are frozen even if you enter new lyrics

## Reset Voice Params
This one I use when I'm auditioning different voices or covering a song from a pre-tuned SVP and just want a clean slate -- unfortunately synth v doesn't have an easy way to do this for the vocal modes so it's only for the basic parameters.

Scope: Group

How it works: Sets all voice params to 0

## Unbend All
This I made for a friend to reset tuning that uses note bends instead of pitch bends.

Scope: Whole file

How it works: Any note that has the lyric of "-" is deleted and it's parent note is extended by that length. 

## Unbend Group
Same as above, but limited to a single group. I find it useful when making harmony tracks since usually I don't want to mimic all the pitch bends I did for the lead melody.

Scope: Group (or track if you don't have groups)

Howe it works: same as above

## Untune
I made this one to clean up basically all tuning on a file -- you can even do vocal mode automation with a minor edit to the script, but again synth v API doesn't handle vocal modes well and so you're left with a bunch of empty automation tracks which I didn't really want.

Scope: Whole file

How it works: Resets automation, voice params, and the note params on manual notes



© Cerulean

https://www.youtube.com/@CeruleanP

https://soundcloud.com/cerulean12345

