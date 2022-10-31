let text = 'foo';

function hashText(text) {
  let textSplitted = text.split('');
  let hash = 0;
  const buckets = 35;

  textSplitted.map((element) => {
    hash += element.charCodeAt(0);
  });

  hash %= buckets;
  return hash;
}

hashText(text);
