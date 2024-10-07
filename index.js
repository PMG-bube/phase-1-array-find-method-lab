const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  function superbowlWin(records){
    for(let record of records){
        if (record.result==="W"){
            return record.year
        }    }
  }
  [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ].find(superbowlWin);

