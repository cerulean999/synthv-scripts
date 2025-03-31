function getClientInfo() {
    return {
      "name" : SV.T("Scale Automation Curves"),
      "author" : "CharlotteShark",
      "versionNumber" : 1,
      "category" : "cerulean-shark-scripts",
      "minEditorVersion" : 65537
    };
  }

  var scopeChoices = ["Track", "Group"];
  var paramChoices = ["--", "pitchDelta", "vibratoEnv", "loudness", "tension", "breathiness", "voicing", "gender", "toneShift"];
  var vmParamChoices = [
    "--", 
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
    "Bold_dynamic",
    "Breathy",
    "Bright",
    "Calm",
    "Charm",
    "Charming",
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
    "Downer",
    "Edge",
    "Emotional",
    "Emotive",
    "Emotive_dynamic",
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
    "Hoarse",
    "Husky",
    "Joyful",
    "Kawaii",
    "Languid",
    "Light",
    "Lively",
    "Lovely",
    "LowTone",
    "Lucid",
    "Masculine",
    "Mature",
    "Melancholic",
    "Mellow",
    "Mid_Powered",
    "MidTone",
    "Mild",
    "Moody",
    "Musical",
    "Muted",
    "Nasal",
    "Natural",
    "Normal",
    "N_Bright",
    "N_peaceful",
    "Open",
    "Opera",
    "Operatic",
    "Overdrive",
    "Passionate",
    "Piano_Ballade",
    "Playful",
    "Poetic",
    "Pop",
    "Pops",
    "Pop_ex",
    "Power",
    "Power_Pop",
    "Powerful",
    "Pretty",
    "Princess",
    "Rap",
    "Relaxed",
    "Resonant",
    "Resonant_dynamic",
    "Resounding",
    "Rhythmic",
    "Rock",
    "Rough",
    "Rounded",
    "Scream",
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
    "Stable",
    "Steady",
    "Straight",
    "Strained",
    "Strong",
    "Subdued",
    "Sumire",
    "Supported",
    "Sweet",
    "Tempting",
    "Tender",
    "Tense",
    "Theatrical",
    "Thin",
    "Throaty",
    "Tight",
    "Tsubaki",
    "Twangy",
    "Unadorned",
    "Vivid",
    "Waltz",
    "Warm",
    "Weaker",
    "Whisper",
    "Whispery",
    "Who",
    "Youngmen"
  ];

  var form = {
    title: SV.T("Selection"),
    buttons: 'OkCancel',
    widgets: [
      {
        name: 'scope',
        type: 'ComboBox',
        label: SV.T('Scope'),
        choices: scopeChoices
      },
      {
        name: 'param',
        type: 'ComboBox',
        label: SV.T('select either a Target Parameter'),
        choices: paramChoices
      },
      {
        name: 'vmparam',
        type: 'ComboBox',
        label: SV.T('or a Vocal Mode Param'),
        choices: vmParamChoices
      },
      {
        name: 'multiplier',
        type: 'Slider',
        label: SV.T('Multiplier'),
        format: '%1.1f%',
      default: 1.0,
      minValue: 0.1,
      maxValue: 2.0,
      interval: 0.1
      },
    ]
    };

  function main() {
    var result = SV.showCustomDialog(form);  
    if (!result.status){
      SV.finish();
    }

    var scope = result.answers.scope;
    var voiceparam = result.answers.param;
    var vmparam = result.answers.vmparam;
    var multiplier = result.answers.multiplier;

    if ((vmparam == 0)  && (voiceparam == 0)){
      SV.showCustomDialog(
        {
          title: SV.T("Please pice either a voice parameter or a vocal mode parameter to scale"),
          buttons: 'OkCancel'
        }
      );
    }
    var groups = [];
    if (scope == 0){
      var track = SV.getMainEditor().getCurrentTrack();
      var numGroups = track.getNumGroups();
      for (i = 1; i < numGroups; i++){
        groups.push(track.getGroupReference(i).getTarget());
      }
    }
    else {
      groups.push(SV.getMainEditor().getCurrentGroup().getTarget())
    }

    for (i = 0; i < groups.length; i++){
      selection = groups[i];    
      var automation = false;
      if (voiceparam != 0) automation = selection.getParameter(paramChoices[voiceparam]);
      else if (vmparam != 0) automation = selection.getParameter("vocalMode_" + vmParamChoices[vmparam]);
      var points = automation.getAllPoints()
      for (j = 0; j < points.length - 1; j++){
        automation.add(points[j][0], points[j][1] * multiplier);
     }
    }
    SV.finish();
   }