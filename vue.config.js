module.exports = {
	devServer: {
		https: true,
		proxy: {
			"/": {
				target: "http://127.0.0.1:8888",
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"^/": "/"
				}
			}
		}
	}
}