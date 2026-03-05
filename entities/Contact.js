{
  "name": "Contact",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "\u304a\u540d\u524d"
    },
    "email": {
      "type": "string",
      "description": "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"
    },
    "phone": {
      "type": "string",
      "description": "\u96fb\u8a71\u756a\u53f7"
    },
    "inquiry_type": {
      "type": "string",
      "enum": [
        "\u4f53\u9a13\u4e88\u7d04",
        "\u5165\u4f1a\u306b\u3064\u3044\u3066",
        "\u6599\u91d1\u306b\u3064\u3044\u3066",
        "\u305d\u306e\u4ed6"
      ],
      "description": "\u304a\u554f\u3044\u5408\u308f\u305b\u7a2e\u5225"
    },
    "message": {
      "type": "string",
      "description": "\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"
    },
    "status": {
      "type": "string",
      "enum": [
        "\u672a\u5bfe\u5fdc",
        "\u5bfe\u5fdc\u4e2d",
        "\u5b8c\u4e86"
      ],
      "default": "\u672a\u5bfe\u5fdc",
      "description": "\u5bfe\u5fdc\u72b6\u6cc1"
    }
  },
  "required": [
    "name",
    "email",
    "inquiry_type",
    "message"
  ]
}
