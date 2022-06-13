let ss = {
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|buffer|callable|chr|cmp|coerce|compile|delattr|dir|divmod|eval|execfile|file|format|getattr|globals|hasattr|hash|help|hex|id|input|intern|isinstance|issubclass|iter|len|locals|long|max|min|next|oct|open|ord|pow|raw_input|reduce|reload|repr|round|setattr|sorted|sum|unichr|unicode|vars|xrange)\b/,
    builtin_yellow: /\b(self|bool|bytearray|bytes|classmethod|complex|dict|enumerate|filter|float|frozenset|int|list|map|memoryview|object|property|range|reversed|set|slice|staticmethod|str|super|tuple|type|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    methods: /(\.[A-z])\w+/,
    punctuation: /[{}[\];(),.:]/
}


let container = document.querySelector('.lang-python');
console.log((container.textContent.match(/\n/g) || '').length + 1)