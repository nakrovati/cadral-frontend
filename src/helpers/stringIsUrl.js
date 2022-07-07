export default function stringIsUrl(checkString) {
  // Pattern check protocol HTTP/HTTPS, full domain name, port and the remainder after slash
  const urlRegexPattern =
    /^(?:https?:\/\/)?[-\w@:%._\+~#=]{1,256}\.[\w()]{1,6}(?::\w)?\b(?:[-\w()@:%_\+.~#?&//=]*)$/;

  if (urlRegexPattern.test(checkString)) {
    return true;
  }
  return false;
}
