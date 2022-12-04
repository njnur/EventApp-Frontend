import React from 'react';
import { css, Global } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-rendering: optimizeLegibility;
        }

        ,
        html {
          font-size: 16px;

          body {
            font-family: 'Inter Tight', serif;
            line-height: 155%;
            font-size: 1rem;
            -webkit-overflow-scrolling: touch;

            input,
            button,
            select,
            optgroup,
            textarea,
            span,
            li,
            a,
            button {
              font-family: 'Inter Tight', sans-serif;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            label {
              font-family: 'Inter Tight', sans-serif;
              font-weight: bold;
            }
          }
        }
        ,
        /* Typography Utils */

      .text {
          &-center {
            text-align: center;
          }

          &-left {
            text-align: left;
          }

          &-right {
            text-align: right;
          }
        }

        .font {
          &-light {
            font-weight: 300;
          }

          &-normal {
            font-weight: 400;
          }

          &-bold {
            font-weight: 700;
          }

          &-medium {
            font-weight: 500;
          }
        }

        //dashboard
        html h1,
        html h2,
        html h3,
        html h4,
        html h5,
        html h6,
        html a,
        html p,
        html li,
        input,
        textarea,
        span,
        div,
        html,
        body,
        html a {
          margin-bottom: 0;
        }

        html ul {
          -webkit-padding-start: 0px;
          list-style: none;
          margin-bottom: 0;
        }

        .scrollbar-track-y,
        .scrollbar-thumb-y {
          width: 5px !important;
        }

        .scrollbar-track-x,
        .scrollbar-thumb-x {
          height: 5px !important;
        }

        .scrollbar-thumb {
          border-radius: 0 !important;
        }

        .scrollbar-track {
          background: rgba(222, 222, 222, 0.15) !important;
        }

        .scrollbar-thumb {
          border-radius: 0 !important;
          background: rgba(0, 0, 0, 0.5) !important;
        }

        .ant-menu-inline,
        .ant-menu-vertical,
        .ant-menu-vertical-left,
        .ant-menu-vertical .ant-menu-item::after,
        .ant-menu-vertical-left .ant-menu-item::after,
        .ant-menu-vertical-right .ant-menu-item::after,
        .ant-menu-inline .ant-menu-item::after {
          border-right: none;
        }

        .ant-form-item {
          margin: 0.5rem 0rem;
        }

        .ant-col.ant-form-item-label {
          padding-bottom: 0;
        }

        .ant-form-large .ant-form-item-label > label {
          height: 2.5rem;
        }

        .ant-menu-title-content {
          padding-left: 0.4rem;
        }

        .ant-menu-inline .ant-menu-item,
        .ant-menu-inline .ant-menu-submenu-title {
          width: 80%;
          margin: 0 16px;
          border-radius: 4px;
        }

        .ant-menu-item-selected .ant-menu-title-content {
          font-weight: 600;
        }

        .ant-layout-sider-zero-width-trigger {
          top: 0;
          border-radius: 0 4px 4px 0;
          background: transparent;
        }

        .ant-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.3rem;
        }

        .ant-modal-footer {
          display: flex;
          justify-content: flex-end;
        }

        .ant-collapse-header {
          padding: 0 !important;
        }

        .ant-collapse-content-box {
          padding: 0 !important;
        }

        .ant-popover-placement-top,
        .ant-popover-placement-topLeft,
        .ant-popover-placement-topRight,
        .ant-popover-placement-bottom,
        .ant-popover-placement-bottomLeft,
        .ant-popover-placement-bottomRight {
          padding: 0;
        }

        .ant-form-item-required {
          flex-direction: row-reverse;
          gap: 0.3rem;
        }

        .hyper-link {
          color: #295393;
        }
        .hyper-link:hover {
          color: #1c76fd;
          text-decoration: underline;
        }
      `}
    />
  );
};
