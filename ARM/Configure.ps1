Configuration Dev
{
  Import-DscResource -ModuleName xSystemSecurity
  Node ("localhost")
  {
    xIEESc DscIE
    {
      UserRole = "Administrators"
      IsEnabled = $false
    }
  }
}
