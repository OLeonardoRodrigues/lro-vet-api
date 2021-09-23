module.exports = {
  async getPatient(req, res) {
    try {
      const PATIENT_MODEL = {};
      try {
        return res.status(200).json({
          'Method': 'get',
          'Route': 'patient'
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
