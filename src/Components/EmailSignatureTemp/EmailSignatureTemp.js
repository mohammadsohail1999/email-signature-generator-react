import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/ContextStore";
import { Button } from "@mui/material";
import "./emailSignTemp.modules.css";

import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

import ContentCopy from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const EmailSignatureTemp = () => {
  const {
    state: {
      name,
      email,
      companyName,
      address,
      phoneNumber,
      officeNumber,
      facebook,
      instagram,
      linkdin,
      profileURL,
      twitterURL,
      profession,
      domain,
    },
  } = useContext(DataContext);

  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 3000);
    } catch (err) {
      console.log("Fail");
    }
  };

  if (
    !name &&
    !email &&
    !companyName &&
    !address &&
    !phoneNumber &&
    !officeNumber &&
    !facebook &&
    !instagram &&
    !linkdin &&
    !profileURL &&
    !twitterURL &&
    !profession &&
    !domain
  ) {
    return (
      <div className="template-wrapper">
        <h1>Create A Template</h1>
      </div>
    );
  }

  return (
    <div className="template-wrapper">
      <table
        cellPadding={0}
        cellSpacing={0}
        className="signature"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          fontSize: "large",
          fontFamily: "Tahoma",
          display: "flex",
          // justifyContent: "center",
        
          alignItems: "center",
        }}
      >
        <tbody>
          <tr>
            <td>
              <table
                cellPadding={0}
                cellSpacing={0}
                className="sc-gPEVay eQYmiW"
                style={{
                  verticalAlign: "-webkit-baseline-middle",
                  fontSize: "large",
                  fontFamily: "Tahoma",
                }}
              >
                <tbody>
                  <tr>
                    {profileURL ||
                    facebook ||
                    twitterURL ||
                    instagram ||
                    linkdin ? (
                      <>
                        <td style={{ verticalAlign: "top" }}>
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            className="profileImage"
                            style={{
                              verticalAlign: "-webkit-baseline-middle",
                              fontSize: "large",
                              fontFamily: "Tahoma",
                            }}
                          >
                            <tbody>
                              {profileURL && (
                                <>
                                  <tr>
                                    <td
                                      className="sc-TOsTZ kjYrri"
                                      style={{ textAlign: "center" }}
                                    >
                                      <img
                                        alt="profileImage"
                                        src={profileURL}
                                        role="presentation"
                                        width={130}
                                        className="sc-cHGsZl bHiaRe"
                                        style={{
                                          maxWidth: 128,
                                          display: "block",
                                          borderRadius: "50%",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height={30} />
                                  </tr>
                                </>
                              )}

                              {instagram ||
                              twitterURL ||
                              facebook ||
                              linkdin ? (
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="sc-gPEVay eQYmiW"
                                      style={{
                                        verticalAlign:
                                          "-webkit-baseline-middle",
                                        fontSize: "large",
                                        fontFamily: "Tahoma",
                                        display: "inline-block",
                                      }}
                                    >
                                      <tbody>
                                        <tr style={{ textAlign: "center" }}>
                                          {facebook && (
                                            <>
                                              {" "}
                                              <td>
                                                <a
                                                  href={facebook}
                                                  color="#151532"
                                                  className="sc-hzDkRC kpsoyz"
                                                  style={{
                                                    display: "inline-block",
                                                    padding: 0,
                                                    backgroundColor:
                                                      "rgb(21, 21, 50)",
                                                  }}
                                                >
                                                  <img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                    alt="facebook"
                                                    color="#151532"
                                                    height={24}
                                                    className="sc-bRBYWo ccSRck"
                                                    style={{
                                                      backgroundColor:
                                                        "rgb(21, 21, 50)",
                                                      maxWidth: 135,
                                                      display: "block",
                                                    }}
                                                  />
                                                </a>
                                              </td>
                                              <td width={5}>
                                                <div />
                                              </td>
                                            </>
                                          )}

                                          {twitterURL && (
                                            <>
                                              <td>
                                                <a
                                                  href={twitterURL}
                                                  color="#151532"
                                                  className="sc-hzDkRC kpsoyz"
                                                  style={{
                                                    display: "inline-block",
                                                    padding: 0,
                                                    backgroundColor:
                                                      "rgb(21, 21, 50)",
                                                  }}
                                                >
                                                  <img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                    alt="twitter"
                                                    color="#151532"
                                                    height={24}
                                                    className="sc-bRBYWo ccSRck"
                                                    style={{
                                                      backgroundColor:
                                                        "rgb(21, 21, 50)",
                                                      maxWidth: 135,
                                                      display: "block",
                                                    }}
                                                  />
                                                </a>
                                              </td>
                                              <td width={5}>
                                                <div />
                                              </td>
                                            </>
                                          )}

                                          {linkdin && (
                                            <>
                                              <td>
                                                <a
                                                  href={linkdin}
                                                  color="#151532"
                                                  className="sc-hzDkRC kpsoyz"
                                                  style={{
                                                    display: "inline-block",
                                                    padding: 0,
                                                    backgroundColor:
                                                      "rgb(21, 21, 50)",
                                                  }}
                                                >
                                                  <img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                    alt="linkedin"
                                                    color="#151532"
                                                    height={24}
                                                    className="sc-bRBYWo ccSRck"
                                                    style={{
                                                      backgroundColor:
                                                        "rgb(21, 21, 50)",
                                                      maxWidth: 135,
                                                      display: "block",
                                                    }}
                                                  />
                                                </a>
                                              </td>
                                              <td width={5}>
                                                <div />
                                              </td>
                                            </>
                                          )}

                                          {instagram && (
                                            <>
                                              <td>
                                                <a
                                                  href={instagram}
                                                  color="#151532"
                                                  className="sc-hzDkRC kpsoyz"
                                                  style={{
                                                    display: "inline-block",
                                                    padding: 0,
                                                    backgroundColor:
                                                      "rgb(21, 21, 50)",
                                                  }}
                                                >
                                                  <img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                    alt="instagram"
                                                    color="#151532"
                                                    height={24}
                                                    className="sc-bRBYWo ccSRck"
                                                    style={{
                                                      backgroundColor:
                                                        "rgb(21, 21, 50)",
                                                      maxWidth: 135,
                                                      display: "block",
                                                    }}
                                                  />
                                                </a>
                                              </td>
                                              <td width={5}>
                                                <div />
                                              </td>
                                            </>
                                          )}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              ) : null}
                            </tbody>
                          </table>
                        </td>
                        <td width={46}>
                          <div />
                        </td>
                      </>
                    ) : null}

                    <td style={{ padding: 0, verticalAlign: "middle" }}>
                      {name && (
                        <h3
                          color="#231010"
                          className="sc-fBuWsC eeihxG"
                          style={{
                            margin: 0,
                            fontSize: 20,
                            color: "rgb(35, 16, 16)",
                          }}
                        >
                          <span>{name}</span>
                          {/* <span>&nbsp;</span> */}
                          {/* <span>Salmani</span> */}
                        </h3>
                      )}

                      {profession && (
                        <p
                          color="#231010"
                          fontSize="large"
                          className="sc-fMiknA bxZCMx"
                          style={{
                            margin: 0,
                            color: "rgb(35, 16, 16)",
                            fontSize: 16,
                            lineHeight: 5,
                          }}
                        >
                          <span>{profession}</span>
                        </p>
                      )}

                      {domain || companyName ? (
                        <p
                          color="#231010"
                          fontSize="large"
                          className="sc-dVhcbM fghLuF"
                          style={{
                            margin: 0,
                            fontWeight: 500,
                            color: "rgb(35, 16, 16)",
                            fontSize: 16,
                            lineHeight: 1,
                          }}
                        >
                          <span>{domain}</span>
                          <span>&nbsp;|&nbsp;</span>
                          <span>{companyName}</span>
                        </p>
                      ) : null}

                      {phoneNumber || officeNumber || address || email ? (
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="sc-gPEVay eQYmiW"
                          style={{
                            verticalAlign: "-webkit-baseline-middle",
                            fontSize: "large",
                            fontFamily: "Tahoma",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td height={30} />
                            </tr>
                            <tr>
                              <td
                                color="#3c0d1c"
                                direction="horizontal"
                                height={1}
                                className="sc-jhAzac hmXDXQ"
                                style={{
                                  width: "100%",
                                  borderBottom: "1px solid rgb(60, 13, 28)",
                                  borderLeft: "none",
                                  display: "block",
                                }}
                              />
                            </tr>
                            <tr>
                              <td height={30} />
                            </tr>
                          </tbody>
                        </table>
                      ) : null}

                      {phoneNumber || officeNumber || address || email ? (
                        <>
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            className="sc-gPEVay eQYmiW"
                            style={{
                              verticalAlign: "-webkit-baseline-middle",
                              fontSize: "large",
                              fontFamily: "Tahoma",
                            }}
                          >
                            <tbody>
                              {phoneNumber || officeNumber ? (
                                <tr
                                  height={25}
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <td
                                    width={30}
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="sc-gPEVay eQYmiW"
                                      style={{
                                        verticalAlign:
                                          "-webkit-baseline-middle",
                                        fontSize: "large",
                                        fontFamily: "Tahoma",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{ verticalAlign: "bottom" }}
                                          >
                                            <span
                                              color="#3c0d1c"
                                              width={11}
                                              className="sc-jlyJG bbyJzT"
                                              style={{
                                                display: "block",
                                                backgroundColor:
                                                  "rgb(60, 13, 28)",
                                              }}
                                            >
                                              <img
                                                alt="img1"
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                color="#3c0d1c"
                                                width={13}
                                                className="sc-iRbamj blSEcj"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(60, 13, 28)",
                                                }}
                                              />
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      color: "rgb(35, 16, 16)",
                                    }}
                                  >
                                    {phoneNumber && (
                                      <>
                                        <a
                                          href="tel:12345"
                                          color="#231010"
                                          className="sc-gipzik iyhjGb"
                                          style={{
                                            textDecoration: "none",
                                            color: "rgb(35, 16, 16)",
                                            fontSize: 12,
                                          }}
                                        >
                                          <span>{phoneNumber}</span>
                                        </a>{" "}
                                      </>
                                    )}

                                    {officeNumber && phoneNumber && <> | </>}

                                    {officeNumber && (
                                      <a
                                        href="tel:12345"
                                        color="#231010"
                                        className="sc-gipzik iyhjGb"
                                        style={{
                                          textDecoration: "none",
                                          color: "rgb(35, 16, 16)",
                                          fontSize: 12,
                                        }}
                                      >
                                        <span>{officeNumber}</span>
                                      </a>
                                    )}
                                  </td>
                                </tr>
                              ) : null}

                              {email && (
                                <tr
                                  height={25}
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <td
                                    width={30}
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <table
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className="sc-gPEVay eQYmiW"
                                      style={{
                                        verticalAlign:
                                          "-webkit-baseline-middle",
                                        fontSize: "large",
                                        fontFamily: "Tahoma",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{ verticalAlign: "bottom" }}
                                          >
                                            <span
                                              color="#3c0d1c"
                                              width={11}
                                              className="sc-jlyJG bbyJzT"
                                              style={{
                                                display: "block",
                                                backgroundColor:
                                                  "rgb(60, 13, 28)",
                                              }}
                                            >
                                              <img
                                                alt="img2"
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                color="#3c0d1c"
                                                width={13}
                                                className="sc-iRbamj blSEcj"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(60, 13, 28)",
                                                }}
                                              />
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ padding: 0 }}>
                                    <a
                                      href="mailto:sohail@example.com"
                                      color="#231010"
                                      className="sc-gipzik iyhjGb"
                                      style={{
                                        textDecoration: "none",
                                        color: "rgb(35, 16, 16)",
                                        fontSize: 12,
                                      }}
                                    >
                                      <span>{email}</span>
                                    </a>
                                  </td>
                                </tr>
                              )}

                              {address && (
                                <>
                                  {" "}
                                  <tr
                                    height={25}
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <td
                                      width={30}
                                      style={{ verticalAlign: "middle" }}
                                    >
                                      <table
                                        cellPadding={0}
                                        cellSpacing={0}
                                        className="sc-gPEVay eQYmiW"
                                        style={{
                                          verticalAlign:
                                            "-webkit-baseline-middle",
                                          fontSize: "large",
                                          fontFamily: "Tahoma",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                verticalAlign: "bottom",
                                              }}
                                            >
                                              <span
                                                color="#3c0d1c"
                                                width={11}
                                                className="sc-jlyJG bbyJzT"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(60, 13, 28)",
                                                }}
                                              >
                                                <img
                                                  alt="img3"
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                  color="#3c0d1c"
                                                  width={13}
                                                  className="sc-iRbamj blSEcj"
                                                  style={{
                                                    display: "block",
                                                    backgroundColor:
                                                      "rgb(60, 13, 28)",
                                                  }}
                                                />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style={{ padding: 0 }}>
                                      <span
                                        color="#231010"
                                        className="sc-csuQGl CQhxV"
                                        style={{
                                          fontSize: 12,
                                          color: "rgb(35, 16, 16)",
                                        }}
                                      >
                                        <span>{address}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </>
                              )}
                            </tbody>
                          </table>
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            className="sc-gPEVay eQYmiW"
                            style={{
                              verticalAlign: "-webkit-baseline-middle",
                              fontSize: "large",
                              fontFamily: "Tahoma",
                            }}
                          >
                            <tbody>
                              <tr>
                                <td height={30} />
                              </tr>
                            </tbody>
                          </table>
                        </>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <Button
        variant="contained"
        color="secondary"
        sx={{
          position: "fixed",
          padding: "14px",
          bottom: "40px",
          right: "40px",
          borderRadius: "50%",
        }}
        size="large"
        onClick={copyToClipboard}
      >
        {copy ? <CheckIcon /> : <ContentCopy />}
      </Button>

      <Snackbar
        open={copy}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success">Template is Copied to Clipboard.</Alert>
      </Snackbar>
    </div>
  );
};

export default EmailSignatureTemp;
