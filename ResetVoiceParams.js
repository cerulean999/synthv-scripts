function getClientInfo() {
    return {
      "name" : SV.T("Reset Voice Params"),
      "author" : "CharlotteShark",
      "category" : "SSS",
      "versionNumber" : 2,
      "minEditorVersion" : 65537
    };
  }



  function main() {
    // Get the current selection, scope (group reference) and its target group.
    var selectedGroup = SV.getMainEditor().getCurrentGroup();
    selectedGroup.setVoice({paramLoudness:0, paramTension:0, paramBreathiness:0, paramGender:0, paramToneShift:0, paramVoicing:0})
    SV.showMessageBox(SV.T("Voice Params Reset"), SV.T("Non-vocal mode params have been reset to 0."));
    SV.finish();
  }
  