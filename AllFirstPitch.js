function getClientInfo() {
    return {
      "name" : SV.T("All Notes 1 Pitch - Group"),
      "author" : "CharlotteShark",
      "category" : "cerulean-shark-scripts",
      "versionNumber" : 2,
      "minEditorVersion" : 65537
    };
  }

  function flatten(ref){
    const group = ref.getTarget();
    const numNotes = group.getNumNotes();
    var pitchTarget = -1;
    for (var i = 0; i < numNotes; i++) {
        const note = group.getNote(i);
        const currPitch = note.getPitch();
        if (pitchTarget == -1){
            pitchTarget = currPitch
        }
        note.setPitch(pitchTarget)
    }
}

  function main() {
    var group = SV.getMainEditor().getCurrentGroup();
    flatten(group);
    SV.finish();
   }