const styleArray = [
    {
      name: "--font-family",
      value: "'Poppins', sans-serif",
      text: "Changes the font family in the TeamConnect UI",
      type: "Font Family"
    },
    {
      name: "--anchor-color",
      value: "#1890ff",
      text: "Changes the anchor tag/hyper link color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--button-color",
      value: "#1890ff",
      text: "Changes the button color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--button-color-hover",
      value: "#1471c7",
      text: "Changes the button hover color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--button-shadow",
      value: "0 3px 8px rgba(0, 0, 0, 0.1)",
      text: "Changes the button's shadow in TeamConnect the UI",
      type: "Shadow"
    },
    {
      name: "--button-radius",
      value: "60px",
      text: "Changes the roundness of the button in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--button-text-color",
      value: "#fff",
      text: "Changes the button's inner text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--background-color",
      value: "#f5f6f7",
      text: "Changes the base background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--text-field-labels",
      value: "#8695ab",
      text: "Changes the text field label's color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--text-field",
      value: "#000",
      text: "Changes the text field's color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--card-header",
      value: "#ebeef5",
      text: "Changes the card's header background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--card-header-text",
      value: "#000",
      text: "Changes the card's header text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--card-body",
      value: "#fff",
      text: "Changes the card's background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--card-shadow",
      value: "0px 2px 2px rgba(2, 13, 29, 0.1)",
      text: "Changes the card's shadow in the TeamConnect UI",
      type: "Shadow"
    },
    {
      name: "--card-border",
      value: "rgba(0, 0, 0, 0)",
      text: "Changes the card's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-nav-icons",
      value: "#fff",
      text: "Changes the global navigation icons color in the TeamConnect UI",
      type: "Color"
    },
    {
        name: "--global-nav-icons-text",
        value: "#fff",
        text: "Changes the global navigation icons text color in the TeamConnect UI",
        type: "Color"
      },
    {
      name: "--global-nav-color",
      value: "#001a49",
      text: "Changes the global navigation background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-search-width",
      value: "16vw",
      text: "Changes the global search bar width in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--global-search-bar-color",
      value: "#f5f6f7",
      text: "Changes the global search bar background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-search-bar-border",
      value: "#d4d9e1",
      text: "Changes the global search bar's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-search-button",
      value: "#fff",
      text: "Changes the global search bar button's & dropdown's background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-search-bar-icon",
      value: "#1890ff",
      text: "Changes the global search bar icons's color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--global-search-border",
      value: "4px",
      text: "Changes the global search bar's roundness in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--hamburger-icon",
      value: "#444",
      text: "Changes the hamburger icon's color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-menu-border",
      value: "#ddd",
      text: "Changes the top navigation bar's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-menu",
      value: "#fff",
      text: "Changes the top navigation bar's background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-text",
      value: "#444",
      text: "Changes the top navigation bar's text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-text-selected",
      value: "#1890ff",
      text: "Changes the top navigation bar's text color when selected in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-bottom-border-selected",
      value: "#1890ff",
      text: "Changes the top navigation bar's selected item bottom border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--top-nav-hover-color",
      value: "#1890ff1a",
      text: "Changes the top navigation bar's text color when hovering in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-border",
      value: "#ddd",
      text: "Changes the left navigation bar's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav",
      value: "#fff",
      text: "Changes the left navigation bar's background color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-icons-color",
      value: "#1890ff",
      text: "Changes the left navigation bar's icons color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-text",
      value: "#8695ab",
      text: "Changes the left navigation bar's text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-text-selected",
      value: "#1890ff",
      text: "Changes the left navigation bar's text color when selected in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-selected-background",
      value: "#dee5f0",
      text: "Changes the left navigation bar's background when selected in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-selected-border",
      value: "#1890ff",
      text: "Changes the left navigation bar's selected item's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-hovered-background",
      value: "#dee5f0",
      text: "Changes the left navigation bar's background color when hovering in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-hovered-border",
      value: "#1890ff",
      text: "Changes the left navigation bar's border color when hovering in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-text-children",
      value: "#8695ab",
      text: "Changes the left navigation bar's children's text color when selected in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-text-children-selected",
      value: "#1890ff",
      text: "Changes the left navigation bar's children's text color when selected in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--left-nav-static-top-color",
      value: "#fff",
      text: "Changes the left navigation bar's background color under the manage collections icon in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--table-background-color-odd",
      value: "#fff",
      text: "Changes the table's background color for odd rows in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--table-background-color-even",
      value: "#fff",
      text: "Changes the table's background color for even rows in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--table-border-color",
      value: "#ddd",
      text: "Changes the table's border color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--table-text",
      value: "#000",
      text: "Changes the table's text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--table-header",
      value: "#000",
      text: "Changes the table's header text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--page-header-color",
      value: "#000",
      text: "Changes the page header text color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--scroll-bar-color",
      value: "#d9dbd9",
      text: "Changes the scroll bar color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--body-text-color",
      value: "#000",
      text: "Changes the default body color for text in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--info-background",
      value: "#004AC1",
      text: "Changes the background color for the info message in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--error-background",
      value: "#004AC1",
      text: "Changes the background color for the error message in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--portal-pane-header-color",
      value: "#000",
      text: "Changes the portal pane header color in the TeamConnect UI",
      type: "Color"
    },
    {
      name: "--portal-pane-header-font-size",
      value: "1.15em",
      text: "Changes the portal pane header's font size in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--portal-pane-header-font-weight",
      value: "800",
      text: "Changes the portal pane header's font weight in the TeamConnect UI",
      type: "Font Weight"
    },
    {
      name: "--portal-pane-padding",
      value: ".5em",
      text: "Changes the portal pane's padding in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--portal-pane-radius",
      value: "12px",
      text: "Changes the portal pane's border radius in the TeamConnect UI",
      type: "Units"
    },
    {
      name: "--portal-pane-shadow",
      value: "0px 10px 20px rgba(18, 38, 63, 0.03)",
      text: "Changes the portal pane's shadow in the TeamConnect UI",
      type: "Shadow"
    }
  ]

  export default styleArray;