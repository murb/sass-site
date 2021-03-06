// The old reference URL redirects to /documentation/, but it may have an anchor
// that refers to a more specific piece of documentation. If so, forward the
// user to that documentation.
if (window.location.hash) {
  if (window.location.pathname == "/documentation") {
    var redirects = {
      "#syntax": "syntax",
      "#using_sass": "/install",
      "#rackrailsmerb_plugin": "https://github.com/rails/sass-rails",
      "#caching": "/ruby-sass",
      "#options": "/ruby-sass",
      "#syntax_selection": "syntax",
      "#encodings": "syntax/parsing#input-encoding",
      "#css_extensions": "style-rules",
      "#nested_rules": "style-rules#nesting",
      "#parent-selector": "style-rules/parent-selector",
      "#nested_properties": "style-rules/declarations#nesting",
      "#placeholder_selectors_foo": "style-rules/placeholder-selectors",
      "#comments": "syntax/comments",
      "#sassscript": "syntax/structure#expressions",
      "#interactive_shell": "cli/dart-sass#interactive",
      "#variables_": "variables",
      "#data_types": "values",
      "#strings": "values/strings",
      "#lists": "values/lists",
      "#bracketed_lists": "values/lists",
      "#maps": "values/maps",
      "#colors": "values/colors",
      "#first_class_functions": "values/functions",
      "#operations": "operators",
      "#number_operations": "operators/numeric",
      "#division-and-slash": "operators/numeric#slash-separated-values",
      "#subtraction": "operators/numeric#unary-operators",
      "#color_operations": "operators/color",
      "#string_operations": "operators/string",
      "#boolean_operations": "operators/boolean",
      "#list_operations": "functions/list",
      "#parentheses": "operators#parentheses",
      "#functions": "functions",
      "#keyword_arguments": "at-rules/function#keyword-arguments",
      "#interpolation_": "interpolation",
      "#parent-script": "style-rules/parent-selector#in-sassscript",
      "#variable_defaults_default": "variables#default-values",
      "#directives": "at-rules",
      "#import": "at-rules/import",
      "#partials": "at-rules/import#partials",
      "#index_files": "at-rules/import#index-files",
      "#nested_import": "at-rules/import#nesting",
      "#media": "at-rules/css#media",
      "#extend": "at-rules/extend",
      "#how_it_works": "at-rules/extend#how-it-works",
      "#multiple_extends": "at-rules/extend",
      "#chaining_extends": "at-rules/extend",
      "#selector_sequences": "at-rules/extend#disallowed-selectors",
      "#merging_selector_sequences": "at-rules/extend#how-it-works",
      "#placeholders": "at-rules/extend#placeholder-selectors",
      "#the_optional_flag": "at-rules/extend#mandatory-and-optional-extends",
      "#extend_in_directives": "at-rules/extend#extend-in-media",
      "#extending_compound_selectors": "at-rules/extend#disallowed-selectors",
      "#at-root": "at-rules/at-root",
      "#at-root_without__and_at-root_with_": "at-rules/at-root#beyond-style-rules",
      "#debug": "at-rules/debug",
      "#warn": "at-rules/warn",
      "#error": "at-rules/error",
      "#control_directives__expressions": "at-rules/control",
      "#if": "at-rules/control/if",
      "#for": "at-rules/control/for",
      "#each": "at-rules/control/each",
      "#each-multi-assign": "at-rules/control/each#destructuring",
      "#while": "at-rules/control/while",
      "#mixins": "at-rules/mixin",
      "#defining_a_mixin": "at-rules/mixin",
      "#including_a_mixin": "at-rules/mixin",
      "#mixin-arguments": "at-rules/mixin#arguments",
      "#trailing_commas": "at-rules/mixin#arguments",
      "#variable_arguments": "at-rules/mixin#taking-arbitrary-arguments",
      "#mixin-content": "at-rules/mixin#content-blocks",
      "#variable_scope_and_content_blocks": "at-rules/mixin#content-blocks",
      "#function_directives": "at-rules/function",
      "#output_style": "cli/dart-sass#style",
      "#expanded": "cli/dart-sass#style",
      "#compressed": "cli/dart-sass#style",
      "#nested": "cli/ruby-sass#style",
      "#compact": "cli/ruby-sass#style",
      "#extending_sass": "js-api",
      "#defining_custom_sass_functions": "js-api#functions",
      "#cache_stores": "/ruby-sass",
      "#custom_importers": "js-api#importers"
    };

    var redirect = redirects[window.location.hash];

    // If the user is looking for a Ruby Sass option, redirect them to the Ruby
    // Sass page for an explanation that it's deprecated.
    if (!redirect && window.location.hash.match(/-option$/)) {
      redirect = "/ruby-sass";
    }

    if (redirect) window.location.href = redirect;
  } else if (window.location.pathname == "/documentation/functions") {
    var redirects = {
      "#declare-class_method": "/ruby-sass",
      "#random_number_generator-class_method": "/ruby-sass",
      "#random_seed=-class_method": "/ruby-sass",
      "#signature-class_method": "/ruby-sass",
      "#abs-instance_method": "functions/math#abs",
      "#adjust_color-instance_method": "functions/color#adjust-color",
      "#adjust_hue-instance_method": "functions/color#adjust-hue",
      "#alpha-instance_method": "functions/color#alpha",
      "#append-instance_method": "functions/list#append",
      "#blue-instance_method": "functions/color#blue",
      "#call-instance_method": "functions/meta#call",
      "#ceil-instance_method": "functions/math#ceil",
      "#change_color-instance_method": "functions/color#change-color",
      "#comparable-instance_method": "functions/math#comparable",
      "#complement-instance_method": "functions/color#complement",
      "#content_exists-instance_method": "functions/meta#content-exists",
      "#darken-instance_method": "functions/color#darken",
      "#desaturate-instance_method": "functions/color#desaturate",
      "#feature_exists-instance_method": "functions/meta#feature-exists",
      "#floor-instance_method": "functions/math#floor",
      "#get_function-instance_method": "functions/meta#get-function",
      "#global_variable_exists-instance_method": "functions/meta#global-variable-exists",
      "#grayscale-instance_method": "functions/color#grayscale",
      "#green-instance_method": "functions/color#green",
      "#hsl-instance_method": "functions/color#hsl",
      "#hsla-instance_method": "functions/color#hsla",
      "#hue-instance_method": "functions/color#hue",
      "#ie_hex_str-instance_method": "functions/color#ie-hex-str",
      "#if-instance_method": "#if",
      "#index-instance_method": "functions/list#index",
      "#inspect-instance_method": "functions/meta#inspect",
      "#invert-instance_method": "functions/color#invert",
      "#is_bracketed-instance_method": "functions/list#is-bracketed",
      "#is_superselector-instance_method": "functions/selector#is-superselector",
      "#join-instance_method": "functions/list#join",
      "#keywords-instance_method": "functions/meta#keywords",
      "#length-instance_method": "functions/list#length",
      "#lighten-instance_method": "functions/color#lighten",
      "#lightness-instance_method": "functions/color#lightness",
      "#list_separator-instance_method": "functions/list#list-separator",
      "#map_get-instance_method": "functions/map#map-get",
      "#map_has_key-instance_method": "functions/map#map-has-key",
      "#map_keys-instance_method": "functions/map#map-keys",
      "#map_merge-instance_method": "functions/map#map-merge",
      "#map_remove-instance_method": "functions/map#map-remove",
      "#map_values-instance_method": "functions/map#map-values",
      "#max-instance_method": "functions/math#max",
      "#min-instance_method": "functions/math#min",
      "#mix-instance_method": "functions/color#mix",
      "#mixin_exists-instance_method": "functions/meta#mixin-exists",
      "#nth-instance_method": "functions/list#nth",
      "#opacify-instance_method": "functions/color#opacify",
      "#opacity-instance_method": "functions/color#opacity",
      "#percentage-instance_method": "functions/math#percentage",
      "#quote-instance_method": "functions/string#quote",
      "#random-instance_method": "functions/math#random",
      "#red-instance_method": "functions/color#red",
      "#rgb-instance_method": "functions/color#rgb",
      "#rgba-instance_method": "functions/color#rgba",
      "#round-instance_method": "functions/math#round",
      "#saturate-instance_method": "functions/color#saturate",
      "#saturation-instance_method": "functions/color#saturation",
      "#scale_color-instance_method": "functions/color#scale-color",
      "#selector_append-instance_method": "functions/selector#selector-append",
      "#selector_extend-instance_method": "functions/selector#selector-extend",
      "#selector_nest-instance_method": "functions/selector#selector-nest",
      "#selector_parse-instance_method": "functions/selector#selector-parse",
      "#selector_replace-instance_method": "functions/selector#selector-replace",
      "#selector_unify-instance_method": "functions/selector#selector-unify",
      "#set-instance_method": "functions/list#set",
      "#simple_selectors-instance_method": "functions/selector#simple-selectors",
      "#str_index-instance_method": "functions/string#str-index",
      "#str_insert-instance_method": "functions/string#str-insert",
      "#str_length-instance_method": "functions/string#str-length",
      "#str_slice-instance_method": "functions/string#str-slice",
      "#to_lower_case-instance_method": "functions/string#to-lower-case",
      "#to_upper_case-instance_method": "functions/string#to-upper-case",
      "#transparentize-instance_method": "functions/color#transparentize",
      "#type_of-instance_method": "functions/meta#type-of",
      "#unique_id-instance_method": "functions/string#unique-id",
      "#unit-instance_method": "functions/math#unit",
      "#unitless-instance_method": "functions/math#unitless",
      "#unquote-instance_method": "functions/string#unquote",
      "#variable_exists-instance_method": "functions/meta#variable-exists",
      "#zip-instance_method": "functions/list#zip"
    };

    var redirect = redirects[window.location.hash];
    if (redirect) window.location.href = redirect;
  }
}
