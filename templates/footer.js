module.exports = {
    name: 'footer',
    is: function(data) {
        return (
            `<div class="footer-spacer"></div>
            <div class="footer"
                ><div class="copyright">
                    &copy; Copyright ${(new Date()).getFullYear()} ${data.me.name}
                </div
            ></div>`
        );
    }
};