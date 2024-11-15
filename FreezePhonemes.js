function getClientInfo() {
    return {
      "name" : SV.T("Freeze Phonemes"),
      "author" : "CharlotteShark",
      "category" : "SSS",
      "versionNumber" : 1,
      "minEditorVersion" : 65537
    };
  }



  function main() {
    // Get the current selection, scope (group reference) and its target group.
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();
    var scope = SV.getMainEditor().getCurrentGroup(); 

    var phonemeGroup = SV.getPhonemesForGroup(scope)
    if (! phonemeGroup.length) {
      SV.showCustomDialog({
        title: "No group selected",
        message: "Because Synthesizer V API finds default phonemes (ones you didn't set yourself) by groups, you need to make sure the group that your notes are selected is currently selected. Or no group if the notes are outsied a group.",
        buttons: "OKCancel"
      })
    }
    for (var i = 0; i < selectedNotes.length; i ++) {
        var phoneme = selectedNotes[i].getPhonemes()
        if (! phoneme.length){
            phoneme = phonemeGroup[i]
        }
        var phoneme_ = phoneme + " "
        selectedNotes[i].setPhonemes(phoneme_)
    }
  
    SV.finish();
  }
  