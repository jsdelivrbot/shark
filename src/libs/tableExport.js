export function tableExport(fileName, tbl_data) {

  let datas = formatTblData(tbl_data)

  let exportData = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>xlsWorksheetName</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table><thead>';

  exportData += datas[0];

  exportData += '</thead></tbody>';

  exportData += datas[1];

  exportData += '</tbody></table></body></html>';

  downloadFile(fileName + '.xls',
    'data:application/vnd.ms-excel;base64,',
    exportData);
}

function formatTblData(tbl_data) {
  let headers = '';
  let bodys = '';
  let tbls = tbl_data.querySelectorAll('table');
  let theads = Array.prototype.slice.call(tbls[0].querySelectorAll('tr'));
  let tbodys = Array.prototype.slice.call(tbls[1].querySelectorAll('tr'));
  theads.map((row) => {
    headers += '<tr>';
    let tds = Array.prototype.slice.call(row.querySelectorAll('th'));
    tds.map((td) => {
      headers += '<th colspan="' + (td.getAttribute('colspan') || 1) + '" rowspan="' + (td.getAttribute('rowspan') || 1) + '">'
      headers += td.innerText;
      headers += '</th>'
    });
    headers += '</tr>'
  });
  tbodys.map((row) => {
    let tds = Array.prototype.slice.call(row.querySelectorAll('td'));
    if (row.parentNode.parentNode == tbls[1] && row.children.length > 1) {
      bodys += '<tr>';
      tds.map((td) => {
        bodys += '<td colspan="' + (td.getAttribute('colspan') || 1) + '" rowspan="' + (td.getAttribute('rowspan') || 1) + '">'
        bodys += td.innerText;
        bodys += '</td>'
      });
      bodys += '</tr>';
    }
  });
  return [headers, bodys]
}


function downloadFile(filename, header, data) {
  let ua = window.navigator.userAgent;
  let DownloadEvt = null;
  if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv\:11\./)) {
    // Internet Explorer (<= 9) workaround by Darryl (https://github.com/dawiong/tableExport.jquery.plugin)
    // based on sampopes answer on http://stackoverflow.com/questions/22317951
    // ! Not working for json and pdf format !
    let frame = document.createElement("iframe");

    if (frame) {
      document.body.appendChild(frame);
      frame.setAttribute("style", "display:none");
      frame.contentDocument.open("txt/html", "replace");
      frame.contentDocument.write(data);
      frame.contentDocument.close();
      frame.focus();

      frame.contentDocument.execCommand("SaveAs", true, filename);
      document.body.removeChild(frame);
    }
  } else {
    let DownloadLink = document.createElement('a');

    if (DownloadLink) {
      DownloadLink.style.display = 'none';
      DownloadLink.download = filename;

      if (header.toLowerCase().indexOf("base64,") >= 0)
        DownloadLink.href = header + base64encode(data);
      else
        DownloadLink.href = header + encodeURIComponent(data);

      document.body.appendChild(DownloadLink);

      if (document.createEvent) {
        if (DownloadEvt == null)
          DownloadEvt = document.createEvent('MouseEvents');

        DownloadEvt.initEvent('click', true, false);
        DownloadLink.dispatchEvent(DownloadEvt);
      } else if (document.createEventObject)
        DownloadLink.fireEvent('onclick');
      else if (typeof DownloadLink.onclick == 'function')
        DownloadLink.onclick();

      document.body.removeChild(DownloadLink);
    }
  }
}

function base64encode(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  input = utf8Encode(input);
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output +
      keyStr.charAt(enc1) + keyStr.charAt(enc2) +
      keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

function utf8Encode(string) {
  string = string.replace(/\x0d\x0a/g, "\x0a");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }
  }
  return utftext;
}
