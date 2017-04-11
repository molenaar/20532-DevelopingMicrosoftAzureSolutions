(function ($) {

    $.fn.extend({

        moreLink: function (options) {

            var defaults = {
                showChar: 100,
                ellipsestext: "...",
                moretext: "more",
                lesstext: "less"
            };

            var options = $.extend(defaults, options);

            return this.each(function () {

                var o = options;

                var obj = $(this);

                var content = obj.html();

                if (content.length > o.showChar) {

                    var c = content.substr(0, o.showChar);
                    var h = content.substr(o.showChar - 1, content.length - o.showChar);

                    var html = c + '<span class="moreelipses">' + o.ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + o.moretext + '</a></span>';

                    obj.html(html);
                }

                obj.find('.morelink').click(function () {

                    if ($(this).hasClass("less")) {

                        $(this).removeClass("less");
                        $(this).html(o.moretext);

                    } else {

                        $(this).addClass("less");
                        $(this).html(o.lesstext);

                    }

                    $(this).parent().prev().toggle('fast');
                    $(this).prev().toggle('fast');

                    return false;

                });

            });

        }

    });

})(jQuery);



















































































































































































































// SIG // Begin signature block
// SIG // MIIdogYJKoZIhvcNAQcCoIIdkzCCHY8CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFO3UnqRPwwM/
// SIG // XQfhuW56xkfDaQBhoIIYZDCCBMMwggOroAMCAQICEzMA
// SIG // AADKfTIWfH79BQMAAAAAAMowDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg1NVoXDTE4MDkwNzE3NTg1NVowgbMxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDTALBgNVBAsTBE1PUFIxJzAlBgNVBAsT
// SIG // Hm5DaXBoZXIgRFNFIEVTTjo3MjhELUM0NUYtRjlFQjEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
// SIG // ggEBAI9wng5dpZe0uPeorcszreG5DyNRbnMI6U75JSWS
// SIG // zmJYxciBrPyy4uh8h/gs4PF3f6A0GBc5iU1mnANH5Rnb
// SIG // 5PGI+TizBB+MjxRYELGQOVn58/woOVmEdoJrBUVBRCws
// SIG // gmzufA78zkELdZP7bEyeTbOQ34Am+Xt9ZvecoiOOL9tx
// SIG // VaSp02PQlCWyK/I9vDt24gIa761cSOexmZ85FDPBj0NN
// SIG // 6NDRgmNVBKXu1I2Ntly9lKvNeq9I5yrRK3DaiIIJVyLq
// SIG // yRfUBSa78LrzG0Y3kwUwreaNdg+G+2u6BZkBA4IPpKAG
// SIG // OU1/mXC1ZLHYDzcG4naa4BHz8pF4hgE0kJRQhF8CAwEA
// SIG // AaOCAQkwggEFMB0GA1UdDgQWBBRm99IcWhPKMekCJ2yW
// SIG // Z5repxuyyjAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7
// SIG // syuwwzWzDzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9NaWNyb3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsG
// SIG // AQUFBwEBBEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsG
// SIG // AQUFBwMIMA0GCSqGSIb3DQEBBQUAA4IBAQBsoP9c0Hm7
// SIG // 1+euBuC7HWIxa/abZ6juCmg9JZ2ARAhIzKnQTOLfqzYT
// SIG // d/KhoBEaHPp7OUBBq67XCFt9HbzL7RmnkMMObBXAKJ1A
// SIG // jrNzh0dOUCCOkV2G8bQDMp4k1D8GnCYogkngNOrS4NW3
// SIG // m7KyGOevZkUB0joKs2judhMyZTrXS6xg5Drdf3rvBNsz
// SIG // ff8XrWZtesCyVQiTG9zCqLFRYxWezpQpRUz5OqxsjfY3
// SIG // 2yig7A7Ta43wImRlYcaxKjImJI+EuDsrydrocP2qe3W6
// SIG // LUwn2btcjue0lPKxNOiuo/M1geS/bg5rYHKl4N3JBr3Z
// SIG // llVga3FoJ5qjTGIF+dF0s330MIIGBzCCA++gAwIBAgIK
// SIG // YRZoNAAAAAAAHDANBgkqhkiG9w0BAQUFADBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcNMDcwNDAz
// SIG // MTI1MzA5WhcNMjEwNDAzMTMwMzA5WjB3MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB
// SIG // DwAwggEKAoIBAQCfoWyx39tIkip8ay4Z4b3i48WZUSNQ
// SIG // rc7dGE4kD+7Rp9FMrXQwIBHrB9VUlRVJlBtCkq6YXDAm
// SIG // 2gBr6Hu97IkHD/cOBJjwicwfyzMkh53y9GccLPx754gd
// SIG // 6udOo6HBI1PKjfpFzwnQXq/QsEIEovmmbJNn1yjcRlOw
// SIG // htDlKEYuJ6yGT1VSDOQDLPtqkJAwbofzWTCd+n7Wl7Po
// SIG // IZd++NIT8wi3U21StEWQn0gASkdmEScpZqiX5NMGgUqi
// SIG // +YSnEUcUCYKfhO1VeP4Bmh1QCIUAEDBG7bfeI0a7xC1U
// SIG // n68eeEExd8yb3zuDk6FhArUdDbH895uyAc4iS1T/+QXD
// SIG // wiALAgMBAAGjggGrMIIBpzAPBgNVHRMBAf8EBTADAQH/
// SIG // MB0GA1UdDgQWBBQjNPjZUkZwCu1A+3b7syuwwzWzDzAL
// SIG // BgNVHQ8EBAMCAYYwEAYJKwYBBAGCNxUBBAMCAQAwgZgG
// SIG // A1UdIwSBkDCBjYAUDqyCYEBWJ5flJRP8KuEKU5VZ5KSh
// SIG // Y6RhMF8xEzARBgoJkiaJk/IsZAEZFgNjb20xGTAXBgoJ
// SIG // kiaJk/IsZAEZFgltaWNyb3NvZnQxLTArBgNVBAMTJE1p
// SIG // Y3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0
// SIG // eYIQea0WoUqgpa1Mc1j0BxMuZTBQBgNVHR8ESTBHMEWg
// SIG // Q6BBhj9odHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NybC9wcm9kdWN0cy9taWNyb3NvZnRyb290Y2VydC5j
// SIG // cmwwVAYIKwYBBQUHAQEESDBGMEQGCCsGAQUFBzAChjho
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRz
// SIG // L01pY3Jvc29mdFJvb3RDZXJ0LmNydDATBgNVHSUEDDAK
// SIG // BggrBgEFBQcDCDANBgkqhkiG9w0BAQUFAAOCAgEAEJeK
// SIG // w1wDRDbd6bStd9vOeVFNAbEudHFbbQwTq86+e4+4LtQS
// SIG // ooxtYrhXAstOIBNQmd16QOJXu69YmhzhHQGGrLt48ovQ
// SIG // 7DsB7uK+jwoFyI1I4vBTFd1Pq5Lk541q1YDB5pTyBi+F
// SIG // A+mRKiQicPv2/OR4mS4N9wficLwYTp2OawpylbihOZxn
// SIG // LcVRDupiXD8WmIsgP+IHGjL5zDFKdjE9K3ILyOpwPf+F
// SIG // ChPfwgphjvDXuBfrTot/xTUrXqO/67x9C0J71FNyIe4w
// SIG // yrt4ZVxbARcKFA7S2hSY9Ty5ZlizLS/n+YWGzFFW6J1w
// SIG // lGysOUzU9nm/qhh6YinvopspNAZ3GmLJPR5tH4LwC8cs
// SIG // u89Ds+X57H2146SodDW4TsVxIxImdgs8UoxxWkZDFLyz
// SIG // s7BNZ8ifQv+AeSGAnhUwZuhCEl4ayJ4iIdBD6Svpu/RI
// SIG // zCzU2DKATCYqSCRfWupW76bemZ3KOm+9gSd0BhHudiG/
// SIG // m4LBJ1S2sWo9iaF2YbRuoROmv6pH8BJv/YoybLL+31HI
// SIG // jCPJZr2dHYcSZAI9La9Zj7jkIeW1sMpjtHhUBdRBLlCs
// SIG // lLCleKuzoJZ1GtmShxN1Ii8yqAhuoFuMJb+g74TKIdbr
// SIG // Hk/Jmu5J4PcBZW+JC33Iacjmbuqnl84xKf8OxVtc2E0b
// SIG // odj6L54/LlUWa8kTo/0wggYQMIID+KADAgECAhMzAAAA
// SIG // ZEeElIbbQRk4AAAAAABkMA0GCSqGSIb3DQEBCwUAMH4x
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01pY3Jv
// SIG // c29mdCBDb2RlIFNpZ25pbmcgUENBIDIwMTEwHhcNMTUx
// SIG // MDI4MjAzMTQ2WhcNMTcwMTI4MjAzMTQ2WjCBgzELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwG
// SIG // A1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjAN
// SIG // BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAky7a2OY+
// SIG // mNkbD2RfTahYTRQ793qE/DwRMTrvicJKLUGlSF3dEp7v
// SIG // q2YoNNV9KlV7TE2K8sDxstNSFYu2swi4i1AL3X/7agmg
// SIG // 3GcExPHfvHUYIEC+eCyZVt3u9S7dPkL5Wh8wrgEUirCC
// SIG // tVGg4m1l/vcYCo0wbU06p8XzNi3uXyygkgCxHEziy/f/
// SIG // JCV/14/A3ZduzrIXtsccRKckyn6B5uYxuRbZXT7RaO6+
// SIG // zUjQhiyu3A4hwcCKw+4bk1kT9sY7gHIYiFP7q78wPqB3
// SIG // vVKIv3rY6LCTraEbjNR+phBQEL7hyBxk+ocu+8RHZhbA
// SIG // hHs2r1+6hURsAg8t4LAOG6I+JQIDAQABo4IBfzCCAXsw
// SIG // HwYDVR0lBBgwFgYIKwYBBQUHAwMGCisGAQQBgjdMCAEw
// SIG // HQYDVR0OBBYEFFhWcQTwvbsz9YNozOeARvdXr9IiMFEG
// SIG // A1UdEQRKMEikRjBEMQ0wCwYDVQQLEwRNT1BSMTMwMQYD
// SIG // VQQFEyozMTY0Mis0OWU4YzNmMy0yMzU5LTQ3ZjYtYTNi
// SIG // ZS02YzhjNDc1MWM0YjYwHwYDVR0jBBgwFoAUSG5k5VAF
// SIG // 04KqFzc3IrVtqMp1ApUwVAYDVR0fBE0wSzBJoEegRYZD
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9j
// SIG // cmwvTWljQ29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNy
// SIG // bDBhBggrBgEFBQcBAQRVMFMwUQYIKwYBBQUHMAKGRWh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2Vy
// SIG // dHMvTWljQ29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNy
// SIG // dDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IC
// SIG // AQCI4gxkQx3dXK6MO4UktZ1A1r1mrFtXNdn06DrARZkQ
// SIG // Tdu0kOTLdlGBCfCzk0309RLkvUgnFKpvLddrg9TGp3n8
// SIG // 0yUbRsp2AogyrlBU+gP5ggHFi7NjGEpj5bH+FDsMw9Py
// SIG // gLg8JelgsvBVudw1SgUt625nY7w1vrwk+cDd58TvAyJQ
// SIG // FAW1zJ+0ySgB9lu2vwg0NKetOyL7dxe3KoRLaztUcqXo
// SIG // YW5CkI+Mv3m8HOeqlhyfFTYxPB5YXyQJPKQJYh8zC9b9
// SIG // 0JXLT7raM7mQ94ygDuFmlaiZ+QSUR3XVupdEngrmZgUB
// SIG // 5jX13M+Pl2Vv7PPFU3xlo3Uhj1wtupNC81epoxGhJ0tR
// SIG // uLdEajD/dCZ0xIniesRXCKSC4HCL3BMnSwVXtIoj/QFy
// SIG // mFYwD5+sAZuvRSgkKyD1rDA7MPcEI2i/Bh5OMAo9App4
// SIG // sR0Gp049oSkXNhvRi/au7QG6NJBTSBbNBGJG8Qp+5QTh
// SIG // KoQUk8mj0ugr4yWRsA9JTbmqVw7u9suB5OKYBMUN4hL/
// SIG // yI+aFVsE/KJInvnxSzXJ1YHka45ADYMKAMl+fLdIqm3n
// SIG // x6rIN0RkoDAbvTAAXGehUCsIod049A1T3IJyUJXt3OsT
// SIG // d3WabhIBXICYfxMg10naaWcyUePgW3+VwP0XLKu4O1+8
// SIG // ZeGyaDSi33GnzmmyYacX3BTqMDCCB3owggVioAMCAQIC
// SIG // CmEOkNIAAAAAAAMwDQYJKoZIhvcNAQELBQAwgYgxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29m
// SIG // dCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDEx
// SIG // MB4XDTExMDcwODIwNTkwOVoXDTI2MDcwODIxMDkwOVow
// SIG // fjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEoMCYGA1UEAxMfTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EgMjAxMTCCAiIw
// SIG // DQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAKvw+nIQ
// SIG // HC6t2G6qghBNNLrytlghn0IbKmvpWlCquAY4GgRJun/D
// SIG // DB7dN2vGEtgL8DjCmQawyDnVARQxQtOJDXlkh36UYCRs
// SIG // r55JnOloXtLfm1OyCizDr9mpK656Ca/XllnKYBoF6WZ2
// SIG // 6DJSJhIv56sIUM+zRLdd2MQuA3WraPPLbfM6XKEW9Ea6
// SIG // 4DhkrG5kNXimoGMPLdNAk/jj3gcN1Vx5pUkp5w2+oBN3
// SIG // vpQ97/vjK1oQH01WKKJ6cuASOrdJXtjt7UORg9l7snuG
// SIG // G9k+sYxd6IlPhBryoS9Z5JA7La4zWMW3Pv4y07MDPbGy
// SIG // r5I4ftKdgCz1TlaRITUlwzluZH9TupwPrRkjhMv0ugOG
// SIG // jfdf8NBSv4yUh7zAIXQlXxgotswnKDglmDlKNs98sZKu
// SIG // HCOnqWbsYR9q4ShJnV+I4iVd0yFLPlLEtVc/JAPw0Xpb
// SIG // L9Uj43BdD1FGd7P4AOG8rAKCX9vAFbO9G9RVS+c5oQ/p
// SIG // I0m8GLhEfEXkwcNyeuBy5yTfv0aZxe/CHFfbg43sTUkw
// SIG // p6uO3+xbn6/83bBm4sGXgXvt1u1L50kppxMopqd9Z4Dm
// SIG // imJ4X7IvhNdXnFy/dygo8e1twyiPLI9AN0/B4YVEicQJ
// SIG // TMXUpUMvdJX3bvh4IFgsE11glZo+TzOE2rCIF96eTvSW
// SIG // sLxGoGyY0uDWiIwLAgMBAAGjggHtMIIB6TAQBgkrBgEE
// SIG // AYI3FQEEAwIBADAdBgNVHQ4EFgQUSG5k5VAF04KqFzc3
// SIG // IrVtqMp1ApUwGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBD
// SIG // AEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8w
// SIG // HwYDVR0jBBgwFoAUci06AjGQQ7kUBU7h6qfHMdEjiTQw
// SIG // WgYDVR0fBFMwUTBPoE2gS4ZJaHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvTWljUm9v
// SIG // Q2VyQXV0MjAxMV8yMDExXzAzXzIyLmNybDBeBggrBgEF
// SIG // BQcBAQRSMFAwTgYIKwYBBQUHMAKGQmh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2Vy
// SIG // QXV0MjAxMV8yMDExXzAzXzIyLmNydDCBnwYDVR0gBIGX
// SIG // MIGUMIGRBgkrBgEEAYI3LgMwgYMwPwYIKwYBBQUHAgEW
// SIG // M2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMv
// SIG // ZG9jcy9wcmltYXJ5Y3BzLmh0bTBABggrBgEFBQcCAjA0
// SIG // HjIgHQBMAGUAZwBhAGwAXwBwAG8AbABpAGMAeQBfAHMA
// SIG // dABhAHQAZQBtAGUAbgB0AC4gHTANBgkqhkiG9w0BAQsF
// SIG // AAOCAgEAZ/KGpZjgVHkaLtPYdGcimwuWEeFjkplCln3S
// SIG // eQyQwWVfLiw++MNy0W2D/r4/6ArKO79HqaPzadtjvyI1
// SIG // pZddZYSQfYtGUFXYDJJ80hpLHPM8QotS0LD9a+M+By4p
// SIG // m+Y9G6XUtR13lDni6WTJRD14eiPzE32mkHSDjfTLJgJG
// SIG // KsKKELukqQUMm+1o+mgulaAqPyprWEljHwlpblqYluSD
// SIG // 9MCP80Yr3vw70L01724lruWvJ+3Q3fMOr5kol5hNDj0L
// SIG // 8giJ1h/DMhji8MUtzluetEk5CsYKwsatruWy2dsViFFF
// SIG // WDgycScaf7H0J/jeLDogaZiyWYlobm+nt3TDQAUGpgEq
// SIG // KD6CPxNNZgvAs0314Y9/HG8VfUWnduVAKmWjw11SYobD
// SIG // HWM2l4bf2vP48hahmifhzaWX0O5dY0HjWwechz4GdwbR
// SIG // BrF1HxS+YWG18NzGGwS+30HHDiju3mUv7Jf2oVyW2ADW
// SIG // oUa9WfOXpQlLSBCZgB/QACnFsZulP0V3HjXG0qKin3p6
// SIG // IvpIlR+r+0cjgPWe+L9rt0uX4ut1eBrs6jeZeRhL/9az
// SIG // I2h15q/6/IvrC4DqaTuv/DDtBEyO3991bWORPdGdVk5P
// SIG // v4BXIqF4ETIheu9BCrE/+6jMpF3BoYibV3FWTkhFwELJ
// SIG // m3ZbCoBIa/15n8G9bW1qyVJzEw16UM0xggSqMIIEpgIB
// SIG // ATCBlTB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQD
// SIG // Ex9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDEx
// SIG // AhMzAAAAZEeElIbbQRk4AAAAAABkMAkGBSsOAwIaBQCg
// SIG // gb4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYK
// SIG // KwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUwIwYJKoZI
// SIG // hvcNAQkEMRYEFL+XBpmJVFwK9CNXpaM1UJtby8AkMF4G
// SIG // CisGAQQBgjcCAQwxUDBOoCaAJABNAGkAYwByAG8AcwBv
// SIG // AGYAdAAgAEwAZQBhAHIAbgBpAG4AZ6EkgCJodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vbGVhcm5pbmcgMA0GCSqG
// SIG // SIb3DQEBAQUABIIBAF0yJc3iTLgt7HxCuOha5qcA6GRk
// SIG // Pa2Zm6TqLKdjqpumozQt5k/0j4OHDaY7UbFgr+T8x4A4
// SIG // O3MZ5WquQWEMeELWFvJWDQ1MyU8UjlQOSuNDmAzOO22v
// SIG // QwE97CJ5WeVqoIjEQn4Q2I/HiYnCujyTIe4HV1gd+m0U
// SIG // B8HAjHE8UvX9Qz7X+5lNREO5w5AFzHAQhhjlE9TAQhzo
// SIG // 2XJUnI6O/hQ4n9c0axGhVFAFly8/ArAxVs68fSowP5V1
// SIG // XBFGMyQuG7xVufPA0Z+gK1pj1JbeRsk1pIbZOdNtY0Li
// SIG // GHOJE6s+ozmqipbZ/7gIzyWEBAggxI+J/JfAwPYy1zAH
// SIG // ll5c/1ShggIoMIICJAYJKoZIhvcNAQkGMYICFTCCAhEC
// SIG // AQEwgY4wdzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UE
// SIG // AxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBAhMzAAAA
// SIG // yn0yFnx+/QUDAAAAAADKMAkGBSsOAwIaBQCgXTAYBgkq
// SIG // hkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJ
// SIG // BTEPFw0xNjEwMTMxNzIzMDVaMCMGCSqGSIb3DQEJBDEW
// SIG // BBTMw3Ihytm6RRPcL3luyrnC14PGODANBgkqhkiG9w0B
// SIG // AQUFAASCAQBlZSisU2J9cBitCz6Vx6u70KPcY/Hqvb3c
// SIG // naPUPzUjuABOU8HcLXLIJ8JyE3g41bQ+TpoROO2UbO9c
// SIG // qoQgOBlv3XhbATkvci15Gx+TDjgFhtKrdzC6BhFLCykm
// SIG // +KIrFevhxfZ2yZfEMKWodTQ4Ez6P7wujeXiapqU2Dmwx
// SIG // y4AOaG7PIP5vepHK00PzIG75qba1P2PivKqEaEDrqBQf
// SIG // T0ZLI29l1MRAqtOZMXxZpWgn303S3Y451Zv0OkZNRxQ8
// SIG // i3u3/fAAf1R1nnHnJ6srx/rW34bEXZ4mFIN2t/7iabBY
// SIG // 1lnlbhhrxR8AQcbsGMWytWJ0mRTeab2kwoO5BXgQl8gW
// SIG // End signature block
