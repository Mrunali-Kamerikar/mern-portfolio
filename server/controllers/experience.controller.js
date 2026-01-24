import Experience from "../models/Experience.model.js";

/**
 * @desc    Get all experience (public)
 * @route   GET /api/experience
 * @access  Public
 */
export const getExperience = async (req, res, next) => {
  try {
    const experience = await Experience.find().sort({ startDate: -1 });
    res.status(200).json({
      success: true,
      data: experience
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add new experience
 * @route   POST /api/experience
 * @access  Admin
 */
export const addExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({
      success: true,
      data: experience
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update experience
 * @route   PUT /api/experience/:id
 * @access  Admin
 */
export const updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!experience) {
      res.status(404);
      throw new Error("Experience not found");
    }

    res.status(200).json({
      success: true,
      data: experience
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete experience
 * @route   DELETE /api/experience/:id
 * @access  Admin
 */
export const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      res.status(404);
      throw new Error("Experience not found");
    }

    res.status(200).json({
      success: true,
      message: "Experience deleted"
    });
  } catch (error) {
    next(error);
  }
};
