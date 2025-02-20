function getClientInfo() {
    return {
      "name" : SV.T("Untune"),
      "author" : "CharlotteShark",
      "category" : "cerulean-shark-scripts",
      "versionNumber" : 1,
      "minEditorVersion" : 65537
    };
}


function resetVocalParams(ref){
    ref.setVoice({
        tF0Left:0.07,
        tF0Right:0.07,
        dF0Left:0.15,
        dF0Right:0.15,
        tF0VbrStart:0.25,
        tF0VbrLeft:0.2,
        tF0VbrRight:0.2,
        dF0Vbr:1,
        fF0Vbr:5.5,
        paramLoudness:0, 
        paramTension:0, 
        paramBreathiness:0, 
        paramGender:0, 
        paramToneShift:0, 
        paramVoicing:0
    })
  }

  function resetAutomations(ref){
    const params = ["pitchDelta", "vibratoEnv", "loudness", "tension", "breathiness", "voicing", "gender", "toneShift"]
    const vocalModes = [
        "Adult",
        "Aggressive",
        "Airly",
        "Airy",
        "Attack",
        "Attacky",
        "Ballad",
        "Ballade",
        "Bassmen",
        "Belt",
        "Bold",
        "Breathy",
        "Bright",
        "Calm",
        "Charm",
        "Cheeky",
        "Chest",
        "Chill",
        "Classic",
        "Clear",
        "Closed",
        "Cool",
        "Crispy",
        "Cute",
        "Dark",
        "Deep",
        "Delicate",
        "Edge",
        "Emotional",
        "Emotive",
        "Emphatic",
        "Falsetto",
        "Feminine",
        "Firm",
        "Flow",
        "Focused",
        "Full",
        "Fun",
        "Gentle",
        "Gentlemen",
        "Glow",
        "Happy",
        "Hardmen",
        "Heavy",
        "HighTone",
        "Husky",
        "Joyful",
        "Kawaii",
        "Languid",
        "Light",
        "Lively",
        "LowTone",
        "Lucid",
        "Masculine",
        "Melancholic",
        "Mellow",
        "Mid_Powered",
        "MidTone",
        "Musical",
        "Muted",
        "Nasal",
        "Natural",
        "Open",
        "Opera",
        "Operatic",
        "Overdrive",
        "Passionate",
        "Piano_Ballade",
        "Poetic",
        "Pop",
        "Pops",
        "Power",
        "Power_Pop",
        "Powerful",
        "Princess",
        "Relaxed",
        "Resonant",
        "Resounding",
        "Rhythmic",
        "Rock",
        "Rough",
        "Serious",
        "Singing",
        "Sleepy",
        "Smokey",
        "Smooth",
        "Soft",
        "Softmen",
        "Solid",
        "Soul",
        "Soulful",
        "Special",
        "Steady",
        "Straight",
        "Strained",
        "Strong",
        "Subdued",
        "Sumire",
        "Sweet",
        "Tender",
        "Tense",
        "Theatrical",
        "Tight",
        "Tsubaki",
        "Twangy",
        "Unadorned",
        "Vivid",
        "Waltz",
        "Warm",
        "Whisper",
        "Who",
        "Youngmen"];
   
    const target = ref.getTarget();
    for (var i = 0; i < params.length; i++) {
        var p = target.getParameter(params[i])
        p.removeAll();
    }
    // Just by reading the parameter curve, you create an empty one, and you get stuck with a whole list of xxx_inactive param curves
    // for (var i = 0; i < vocalModes.length; i++) {
    //     var p = target.getParameter("vocalMode_" +vocalModes[i])
    //     if (p.getAllPoints().length > 0) {
    //         p.removeAll();
    //     }
    // }
  }

  function resetNoteAttr(ref){
    const target = ref.getTarget()
    const numNotes = target.getNumNotes()
    for (var i = 0; i < numNotes; i++) {
        const note = target.getNote(i);
        note.setAttributes(
            {
                tF0Left:0.07,
                tF0Right:0.07,
                dF0Left:0.15,
                dF0Right:0.15,
                tF0VbrStart:0.25,
                tF0VbrLeft:0.2,
                tF0VbrRight:0.2,
                dF0Vbr:1,
                fF0Vbr:5.5,
                tNoteOffset: 0,
            }
        )
    }
  }


  function main() {
    const project = SV.getProject();
    const numTracks = project.getNumTracks();
    for (var i = 0; i < numTracks; i++) {
        const track = project.getTrack(i);
        const numGroups = track.getNumGroups();
        for (var j = 0; j < numGroups; j++){
            const group = track.getGroupReference(j);
            resetVocalParams(group);
            resetAutomations(group);
            resetNoteAttr(group);
        }
    }
    // Get the current selection, scope (group reference) and its target group.
    SV.showMessageBox(SV.T("SVP has been untuned"), SV.T("You will need to remove pitch/key shift and vocal mode settings on your own. The API currently does not have documented way to access those yet."));
    SV.finish();
  }

  