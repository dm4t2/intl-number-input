import{_ as e,c as o,o as t,a}from"./app.2606b82b.js";const g='{"title":"Config Reference","description":"","frontmatter":{},"headers":[{"level":2,"title":"locale","slug":"locale"},{"level":2,"title":"formatStyle","slug":"formatstyle"},{"level":2,"title":"currency","slug":"currency"},{"level":2,"title":"currencyDisplay","slug":"currencydisplay"},{"level":2,"title":"unit","slug":"unit"},{"level":2,"title":"unitDisplay","slug":"unitdisplay"},{"level":2,"title":"precision","slug":"precision"},{"level":2,"title":"autoDecimalDigits","slug":"autodecimaldigits"},{"level":2,"title":"hidePrefixOrSuffixOnFocus","slug":"hideprefixorsuffixonfocus"},{"level":2,"title":"hideGroupingSeparatorOnFocus","slug":"hidegroupingseparatoronfocus"},{"level":2,"title":"hideNegligibleDecimalDigitsOnFocus","slug":"hidenegligibledecimaldigitsonfocus"},{"level":2,"title":"exportValueAsInteger","slug":"exportvalueasinteger"},{"level":2,"title":"valueRange","slug":"valuerange"},{"level":2,"title":"autoSign","slug":"autosign"},{"level":2,"title":"useGrouping","slug":"usegrouping"}],"relativePath":"config.md","lastUpdated":1636402827099}',i={},r=a('<h1 id="config-reference" tabindex="-1">Config Reference <a class="header-anchor" href="#config-reference" aria-hidden="true">#</a></h1><p>The following options can be passed as an object literal to the <code>NumberInput</code> constructor.</p><h2 id="locale" tabindex="-1">locale <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h2><p>A <a href="https://tools.ietf.org/html/bcp47" target="_blank" rel="noopener noreferrer">BCP 47</a> language tag (for example <code>&quot;en&quot;</code> or <code>&quot;de-DE&quot;</code>). Default is <code>undefined</code> (use the default locale of the Browser).</p><h2 id="formatstyle" tabindex="-1">formatStyle <a class="header-anchor" href="#formatstyle" aria-hidden="true">#</a></h2><p>The formatting style to use. Possible values are:</p><ul><li><code>&quot;decimal&quot;</code> for plain number formatting (<strong>default</strong>)</li><li><code>&quot;currency&quot;</code> for currency formatting</li><li><code>&quot;percent&quot;</code> for percent formatting</li><li><code>&quot;unit&quot;</code> for unit formatting</li></ul><h2 id="currency" tabindex="-1">currency <a class="header-anchor" href="#currency" aria-hidden="true">#</a></h2><p>A <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noopener noreferrer">ISO 4217</a> currency code, for example <code>&quot;USD&quot;</code> or <code>&quot;EUR&quot;</code>, which is required when using <code>&quot;currency&quot;</code> as <code>formatStyle</code>.</p><h2 id="currencydisplay" tabindex="-1">currencyDisplay <a class="header-anchor" href="#currencydisplay" aria-hidden="true">#</a></h2><p>How to display the currency when using <code>&quot;currency&quot;</code> as <code>formatStyle</code>. Possible values are:</p><ul><li><code>&quot;symbol&quot;</code> to use a localized currency symbol such as &quot;\u20AC&quot; (<strong>default</strong>)</li><li><code>&quot;narrowSymbol&quot;</code> to use a narrow format symbol (&quot;$100&quot; rather than &quot;US$100&quot;)</li><li><code>&quot;code&quot;</code> to use the ISO currency code</li><li><code>&quot;name&quot;</code> to use a localized currency name such as &quot;dollar&quot;</li></ul><h2 id="unit" tabindex="-1">unit <a class="header-anchor" href="#unit" aria-hidden="true">#</a></h2><p>A <a href="https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier" target="_blank" rel="noopener noreferrer">unit identifier</a>, which is required when using <code>&quot;unit&quot;</code> as <code>formatStyle</code>. Pairs of simple units can be concatenated with &quot;-per-&quot; to make a compound unit.</p><h2 id="unitdisplay" tabindex="-1">unitDisplay <a class="header-anchor" href="#unitdisplay" aria-hidden="true">#</a></h2><p>How to display the unit when using <code>&quot;unit&quot;</code> as <code>formatStyle</code>. Possible values are:</p><ul><li><code>&quot;short&quot;</code> (<strong>default</strong>, for example &quot;1024B&quot;)</li><li><code>&quot;narrow&quot;</code> (for example &quot;1024 byte&quot;)</li><li><code>&quot;long&quot;</code> (for example &quot;1024 bytes&quot;)</li></ul><h2 id="precision" tabindex="-1">precision <a class="header-anchor" href="#precision" aria-hidden="true">#</a></h2><p>The number of displayed decimal digits. Default is <code>undefined</code> (use the default of the <code>formatStyle</code>, decimal digits will be hidden for integer numbers). Must be between 0 and 15. You can also pass an object <code>{min, max}</code> to use a precision range.</p><h2 id="autodecimaldigits" tabindex="-1">autoDecimalDigits <a class="header-anchor" href="#autodecimaldigits" aria-hidden="true">#</a></h2><p>Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits. Default is <code>false</code> (the decimal symbol needs to be inserted manually).</p><h2 id="hideprefixorsuffixonfocus" tabindex="-1">hidePrefixOrSuffixOnFocus <a class="header-anchor" href="#hideprefixorsuffixonfocus" aria-hidden="true">#</a></h2><p>Whether to hide the prefix or suffix on focus. Default is <code>true</code>.</p><h2 id="hidegroupingseparatoronfocus" tabindex="-1">hideGroupingSeparatorOnFocus <a class="header-anchor" href="#hidegroupingseparatoronfocus" aria-hidden="true">#</a></h2><p>Whether to hide the grouping separator on focus. Default is <code>true</code>.</p><h2 id="hidenegligibledecimaldigitsonfocus" tabindex="-1">hideNegligibleDecimalDigitsOnFocus <a class="header-anchor" href="#hidenegligibledecimaldigitsonfocus" aria-hidden="true">#</a></h2><p>Whether to hide negligible decimal digits on focus. Default is <code>true</code>.</p><h2 id="exportvalueasinteger" tabindex="-1">exportValueAsInteger <a class="header-anchor" href="#exportvalueasinteger" aria-hidden="true">#</a></h2><p>Whether the number value should be exported as integer instead of float value. Default is <code>false</code>.</p><h2 id="valuerange" tabindex="-1">valueRange <a class="header-anchor" href="#valuerange" aria-hidden="true">#</a></h2><p>The range of accepted values as object <code>{min, max}</code>. Default is <code>undefined</code> (no value range). The validation is triggered on blur and automatically sets the respective threshold if out of range.</p><h2 id="autosign" tabindex="-1">autoSign <a class="header-anchor" href="#autosign" aria-hidden="true">#</a></h2><p>Whether the minus symbol is automatically inserted or prevented to be inputted depending on the configured <code>valueRange</code>. Default is <code>true</code>.</p><h2 id="usegrouping" tabindex="-1">useGrouping <a class="header-anchor" href="#usegrouping" aria-hidden="true">#</a></h2><p>Whether to use grouping separators such as thousands/lakh/crore separators.</p>',35),n=[r];function l(d,u,s,c,h,f){return t(),o("div",null,n)}var m=e(i,[["render",l]]);export{g as __pageData,m as default};
