const getSettings = (req, res) => {
  res.send('Get Route Works')
}

const updateSettings = (req, res) => {
  res.send('Update Route Works')
}

module.exports = {
  getSettings,
  updateSettings
}
