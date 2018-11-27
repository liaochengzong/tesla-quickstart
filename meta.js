module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "appid": {
      "type": "string",
      "required": false,
      "message": "wxmp appid",
      "default": "touristappid"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Mpvue project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  }
};
