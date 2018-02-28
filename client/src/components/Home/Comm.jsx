import React from 'react';
import ReactDom from 'react-dom';

const Comm = (props) => {
  return (<li>
    <span className="commentBody">
      <table>
        <tbody>
          <tr>
            <td className="userCell">
              <a className="userLink">
                <strong>@Mr.RoughStuff</strong>
              </a>
            </td>
            <td>
              <span className="commentText">
                Oh my, what a pic, that pic, wow. I'm Mr. Rough Stuff.
              </span>

            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <span className="commentMeta">
                <em>
                  07.08.2018 - 3:08 pm
                </em>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
  </li>)

}

export default Comm;
