export function getUrlParam(search: string, name: string) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = search.substr(1).match(reg);
  
    if (!r && window.location.hash && window.location.hash.indexOf("?") > 0) {
      r = window.location.hash
        .substr(window.location.hash.indexOf("?") + 1)
        .match(reg);
    }
  
    if (r != null) {
      return decodeURIComponent(r[2]);
    } else {
      return null;
    }
  }