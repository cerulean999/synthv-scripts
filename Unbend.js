function getClientInfo() {
    return {
      "name" : SV.T("Unbend"),
      "author" : "CharlotteShark",
      "category" : "SSS",
      "versionNumber" : 1,
      "minEditorVersion" : 65537
    };
}

function unbend(ref){
    const group = ref.getTarget();
    const numNotes = group.getNumNotes();
    var dash = false;
    var bendLen = 0;
    for (var i = numNotes-1; i >= 0; i--) {
        const note = group.getNote(i);
        const lyr = note.getLyrics();
        const noteLen = note.getDuration();
        if (lyr == "-"){
            dash = true;
            bendLen += noteLen;
            group.removeNote(i);
        } else if (dash) {
            dash = false;
            note.setDuration(noteLen + bendLen);
            bendLen = 0;
        }
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
            unbend(group);
        }
    }
    SV.finish();
  }