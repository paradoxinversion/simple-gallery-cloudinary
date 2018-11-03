/**
 * Takes comma-separated str of tags and returns an array
 * of all tags with whitespace removed.
 * @param {String} tags
 */
export const extractTags = tags => {
  const splitTags = tags.split(",");
  const strippedWhiteSpace = splitTags.map(tag => {
    return tag.trim();
  });
  return strippedWhiteSpace;
};
