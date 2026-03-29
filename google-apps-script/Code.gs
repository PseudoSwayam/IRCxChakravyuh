function doPost(e) {
  try {
    var payload = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : "{}");
    var eventType = (payload.eventType || "").toString().trim();

    var sheetName = "";
    if (eventType === "Robo Race") {
      sheetName = "RoboRace";
    } else if (eventType === "Bot FC") {
      sheetName = "BotFC";
    } else {
      throw new Error("Invalid eventType");
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      throw new Error("Sheet not found: " + sheetName);
    }

    var participants = Array.isArray(payload.participants) ? payload.participants : [];
    var headers = ensureHeaders(sheet);
    var headerIndex = createHeaderIndex(headers);
    var row = new Array(headers.length).fill("");

    setByHeader(row, headerIndex, ["timestamp"], new Date());
    setByHeader(row, headerIndex, ["team name", "teamname"], payload.teamName || "");
    setByHeader(row, headerIndex, ["team size", "teamsize"], payload.teamSize || "");
    setByHeader(row, headerIndex, ["event", "event type", "eventtype"], payload.eventType || "");
    setByHeader(row, headerIndex, ["extra field", "extrafield"], payload.extraField || "");

    setParticipantData(row, headerIndex, participants);

    // Backward compatibility (if old simple headers exist)
    setByHeader(row, headerIndex, ["name"], participants[0] && participants[0].name ? participants[0].name : (payload.name || ""));
    setByHeader(row, headerIndex, ["email"], participants[0] && participants[0].email ? participants[0].email : (payload.email || ""));
    setByHeader(row, headerIndex, ["phone", "phone number"], participants[0] && participants[0].phone ? participants[0].phone : (payload.phone || ""));
    setByHeader(row, headerIndex, ["registration number", "reg no", "regno"], participants[0] && participants[0].registrationNumber ? participants[0].registrationNumber : (payload.registrationNumber || ""));

    sheet.getRange(sheet.getLastRow() + 1, 1, 1, headers.length).setValues([row]);

    return jsonResponse({ status: "success", message: "Saved" });
  } catch (error) {
    return jsonResponse({ status: "error", message: error.message });
  }
}

function ensureHeaders(sheet) {
  var requiredHeaders = [
    "Timestamp",
    "Team Name",
    "Team Size",
    "Event",
    "Extra Field",
    "Participant 1 Name",
    "Participant 1 Email",
    "Participant 1 Phone",
    "Participant 1 Reg No",
    "Participant 2 Name",
    "Participant 2 Email",
    "Participant 2 Phone",
    "Participant 2 Reg No",
    "Participant 3 Name",
    "Participant 3 Email",
    "Participant 3 Phone",
    "Participant 3 Reg No",
    "Participant 4 Name",
    "Participant 4 Email",
    "Participant 4 Phone",
    "Participant 4 Reg No"
  ];

  var lastCol = Math.max(sheet.getLastColumn(), requiredHeaders.length);
  var firstRow = sheet.getRange(1, 1, 1, lastCol).getValues()[0];

  var isEmptyHeaderRow = firstRow.every(function(cell) {
    return !cell;
  });

  if (sheet.getLastRow() === 0 || isEmptyHeaderRow) {
    sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
    return requiredHeaders;
  }

  var normalized = firstRow.map(function(cell) {
    return normalizeHeader(cell);
  });

  var currentHeaders = firstRow.slice();
  var nextCol = firstRow.length + 1;

  for (var i = 0; i < requiredHeaders.length; i++) {
    var required = requiredHeaders[i];
    var normalizedRequired = normalizeHeader(required);
    if (normalized.indexOf(normalizedRequired) === -1) {
      sheet.getRange(1, nextCol).setValue(required);
      currentHeaders.push(required);
      normalized.push(normalizedRequired);
      nextCol += 1;
    }
  }

  return currentHeaders.map(function(cell) {
    return (cell || "").toString().trim();
  });
}

function createHeaderIndex(headers) {
  var index = {};
  for (var i = 0; i < headers.length; i++) {
    index[normalizeHeader(headers[i])] = i;
  }
  return index;
}

function setByHeader(row, headerIndex, aliases, value) {
  for (var i = 0; i < aliases.length; i++) {
    var key = normalizeHeader(aliases[i]);
    if (headerIndex.hasOwnProperty(key)) {
      row[headerIndex[key]] = value;
      return;
    }
  }
}

function setParticipantData(row, headerIndex, participants) {
  for (var i = 0; i < 4; i++) {
    var participant = participants[i] || {};
    var n = (i + 1).toString();

    setByHeader(row, headerIndex, ["participant " + n + " name", "p" + n + " name"], participant.name || "");
    setByHeader(row, headerIndex, ["participant " + n + " email", "p" + n + " email"], participant.email || "");
    setByHeader(row, headerIndex, ["participant " + n + " phone", "p" + n + " phone"], participant.phone || "");
    setByHeader(
      row,
      headerIndex,
      ["participant " + n + " reg no", "participant " + n + " registration number", "p" + n + " reg no"],
      participant.registrationNumber || ""
    );
  }
}

function normalizeHeader(header) {
  return (header || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
